import * as Yup from 'yup';

import Disciplina from '../models/Disciplina';
import Professor from '../models/Professor';

class DisciplinaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      codigo: Yup.number().required(),
      nome: Yup.string().required(),
      horario: Yup.string().required(),
      carga_horaria: Yup.number().required(),
      professor_ass: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const discExist = await Disciplina.findOne({
      where: { codigo: req.body.codigo },
    });
    if (discExist) {
      return res.status(400).json({ error: 'Disciplina já existe' });
    }

    const userExists = await Professor.findOne({
      where: { matricula_prof: req.body.professor_ass },
    });
    if (!userExists) {
      return res.status(400).json({ error: 'Usuário não existente' });
    }
    const { name: nomeprof } = userExists;

    await Disciplina.create({ ...req.body, nomeprof });

    return res.json('Disciplina criada com sucesso!');
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      codigo: Yup.number(),
      nome: Yup.string(),
      horario: Yup.string(),
      carga_horaria: Yup.number(),
      professor_ass: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Dado(s) invalido(s)' });
    }
    const { id } = req.body;

    const discExist = await Disciplina.findOne({
      where: { codigo: req.body.codigo },
    });
    if (!discExist) {
      return res.status(400).json({ error: 'Disciplina não existe' });
    }

    const userExists = await Professor.findOne({
      where: { matricula_prof: req.body.professor_ass },
    });
    if (!userExists) {
      return res.status(400).json({ error: 'Usuário não existente' });
    }

    const dp = await Disciplina.findByPk(id);
    const { name: nomeprof } = userExists;
    await dp.update({ ...req.body, nomeprof });

    return res.json('Disciplina atualizada com sucesso!');
  }

  async delete(req, res) {
    const { disciplinaId } = req.params;

    const dp = await Disciplina.findByPk(disciplinaId);

    await dp.destroy();

    return res.json('Disciplina excluida com sucesso!');
  }

  async index(req, res) {
    const dp = await Disciplina.findAll({
      attributes: [
        'id',
        'codigo',
        'nome',
        'horario',
        'carga_horaria',
        'nomeprof',
        'professor_ass',
      ],
    });

    return res.json(dp);
  }
}

export default new DisciplinaController();
