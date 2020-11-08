import * as Yup from 'yup';

import Disciplina from '../models/Disciplina';
import DisciplinaAluno from '../models/DisciplinaAluno';
import Aluno from '../models/Aluno';
import Professor from '../models/Professor';

class DisciplinaNotaController {
  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      codigodisc: Yup.number(),
      aluno: Yup.number().positive(),
      nota1: Yup.number().positive(),
      nota2: Yup.number().positive(),
      nota3: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Dado(s) invalido(s)' });
    }
    const { id } = req.body;

    const userExists = await Aluno.findOne({
      where: { matricula_aluno: req.body.aluno },
    });
    if (!userExists) {
      return res.status(400).json({ error: 'Usuário não existente' });
    }

    const discExist = await Disciplina.findOne({
      where: { codigo: req.body.codigodisc },
    });

    if (!discExist) {
      return res.status(400).json({ error: 'Disciplina não existe' });
    }

    const { nota1, nota2, nota3 } = req.body;
    const media = (nota1 + nota2 + nota3) / 3;

    const { rec } = req.body;
    if ((media < 7 && rec == null) || (media < 7 && rec < 5)) {
      return res.status(400).json({ error: 'Aluno Reprovado' });
    }

    const dp = await DisciplinaAluno.findByPk(id);

    if (media >= 7) {
      dp.rec = null;
    }

    const { nome: disciplina, horario: horariodisc } = discExist;
    const { name: nomealuno } = userExists;
    const { nomeprof: nomeprofessor, professor_ass: professor } = discExist;

    await dp.update({
      ...req.body,
      disciplina,
      nomealuno,
      nomeprofessor,
      professor,
      horariodisc,
      rec,
    });

    return res.json('Atualização feita com sucesso');
  }

  async index(req, res) {
    const prof = await Professor.findByPk(req.userId);

    const dp = await DisciplinaAluno.findAll({
      where: { professor: prof.matricula_prof },
      attributes: [
        'id',
        'codigodisc',
        'disciplina',
        'horariodisc',
        'nomealuno',
        'aluno',
        'nota1',
        'nota2',
        'nota3',
        'rec',
      ],
    });

    return res.json(dp);
  }
}

export default new DisciplinaNotaController();
