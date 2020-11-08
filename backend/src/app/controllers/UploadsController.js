import * as Yup from 'yup';

import Professor from '../models/Professor';
import Disciplina from '../models/Disciplina';
import Uploads from '../models/Uploads';

class UploadsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      codigodisciplina: Yup.number().required(),
      link: Yup.string().required(),
      descricao: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const discExist = await Disciplina.findOne({
      where: { codigo: req.body.codigodisciplina },
    });
    if (!discExist) {
      return res.status(400).json({ error: 'Disciplina não existe' });
    }

    const {
      professor_ass: professorassociado,
      nome: nomedisciplina,
    } = discExist;

    await Uploads.create({
      ...req.body,
      professorassociado,
      nomedisciplina,
    });

    return res.json('Link criado com sucesso!');
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      codigodisciplina: Yup.number().required(),
      link: Yup.string().required(),
      descricao: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const discExist = await Disciplina.findOne({
      where: { codigo: req.body.codigodisciplina },
    });
    if (!discExist) {
      return res.status(400).json({ error: 'Disciplina não existe' });
    }

    const dp = await Uploads.findByPk(id);

    const {
      professor_ass: professorassociado,
      nome: nomedisciplina,
    } = discExist;

    await dp.update({ ...req.body, professorassociado, nomedisciplina });

    return res.json('Link atualizado com sucesso!');
  }

  async delete(req, res) {
    const { linkId } = req.params;

    const dp = await Uploads.findByPk(linkId);
    await dp.destroy();

    return res.json('Link excluido com sucesso!');
  }

  async index(req, res) {
    const prof = await Professor.findByPk(req.userId);

    const dp = await Uploads.findAll({
      where: { professorassociado: prof.matricula_prof },
      attributes: [
        'id',
        'link',
        'descricao',
        'codigodisciplina',
        'professorassociado',
        'nomedisciplina',
      ],
    });

    return res.json(dp);
  }

  async index2(req, res) {
    const dp = await Uploads.findAll({
      attributes: [
        'id',
        'link',
        'descricao',
        'codigodisciplina',
        'professorassociado',
        'nomedisciplina',
      ],
    });

    return res.json(dp);
  }
}

export default new UploadsController();
