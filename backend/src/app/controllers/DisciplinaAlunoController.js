import * as Yup from 'yup';

import Disciplina from '../models/Disciplina';
import DisciplinaAluno from '../models/DisciplinaAluno';
import Aluno from '../models/Aluno';

class DisciplinaAlunoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      matricula_aluno: Yup.number().required(),
      codigodisc: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const al = await Aluno.findOne({
      where: { matricula_aluno: req.body.matricula_aluno },
    });

    const discExist = await Disciplina.findOne({
      where: { codigo: req.body.codigodisc },
    });

    if (!discExist) {
      return res.status(400).json({ error: 'Disciplina não existe' });
    }
    const { nome: disciplina, horario: horariodisc } = discExist;
    const { matricula_aluno: aluno, name: nomealuno } = al;
    const { professor_ass: professor, nomeprof: nomeprofessor } = discExist;

    await DisciplinaAluno.create({
      ...req.body,
      disciplina,
      aluno,
      nomealuno,
      professor,
      nomeprofessor,
      horariodisc,
    });

    return res.json('Cadastro de disciplina feita com sucesso');
  }

  async delete(req, res) {
    const { disciplinalId } = req.params;

    const dp = await DisciplinaAluno.findByPk(disciplinalId);

    await dp.destroy();

    return res.json('Disciplina excluida com sucesso!');
  }

  async index(req, res) {
    const al = await Aluno.findByPk(req.userId);
    const dp = await DisciplinaAluno.findAll({
      where: { aluno: al.matricula_aluno },
      attributes: [
        'id',
        'codigodisc',
        'disciplina',
        'horariodisc',
        'nomeprofessor',
        'professor',
        'nota1',
        'nota2',
        'nota3',
        'rec',
      ],
    });

    return res.json(dp);
  }

  async index2(req, res) {
    const dp = await DisciplinaAluno.findAll({
      attributes: [
        'id',
        'codigodisc',
        'disciplina',
        'horariodisc',
        'aluno',
        'nomealuno',
        'nomeprofessor',
        'professor',
        'nota1',
        'nota2',
        'nota3',
        'rec',
      ],
    });

    return res.json(dp);
  }
}

export default new DisciplinaAlunoController();
