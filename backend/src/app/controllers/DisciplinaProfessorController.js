import Disciplina from '../models/Disciplina';
import Professor from '../models/Professor';

class DisciplinaProfessorController {
  async index(req, res) {
    const prof = await Professor.findByPk(req.userId);
    const dp = await Disciplina.findAll({
      where: { professor_ass: prof.matricula_prof },
      attributes: [
        'id',
        'nomeprof',
        'professor_ass',
        'horario',
        'codigo',
        'nome',
        'carga_horaria',
      ],
    });

    return res.json(dp);
  }
}

export default new DisciplinaProfessorController();
