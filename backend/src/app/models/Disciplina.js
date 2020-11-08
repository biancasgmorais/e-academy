import Sequelize, { Model } from 'sequelize';

class Disciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: Sequelize.INTEGER,
        carga_horaria: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        horario: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Professor, {
      foreignKey: 'professor_ass',
      as: 'matricula_prof',
    });
    this.belongsTo(models.Professor, {
      foreignKey: 'nomeprof',
      as: 'name',
    });
  }
}
export default Disciplina;
