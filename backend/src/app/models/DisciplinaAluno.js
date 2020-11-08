import Sequelize, { Model } from 'sequelize';

class DisciplinaAluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nota1: Sequelize.DECIMAL,
        nota2: Sequelize.DECIMAL,
        nota3: Sequelize.DECIMAL,
        rec: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Disciplina, {
      foreignKey: 'codigodisc',
      as: 'codigo',
    });
    this.belongsTo(models.Disciplina, {
      foreignKey: 'disciplina',
      as: 'nome',
    });
    this.belongsTo(models.Disciplina, {
      foreignKey: 'horariodisc',
      as: 'horario',
    });
    this.belongsTo(models.Aluno, {
      foreignKey: 'aluno',
      as: 'matricula_aluno',
    });
    this.belongsTo(models.Aluno, {
      foreignKey: 'nomealuno',
      as: 'name',
    });
    this.belongsTo(models.Professor, {
      foreignKey: 'professor',
      as: 'matricula_prof',
    });
    this.belongsTo(models.Disciplina, {
      foreignKey: 'nomeprofessor',
      as: 'nameprof',
    });
  }
}
export default DisciplinaAluno;
