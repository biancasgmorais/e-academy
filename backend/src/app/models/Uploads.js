import Sequelize, { Model } from 'sequelize';

class Uploads extends Model {
  static init(sequelize) {
    super.init(
      {
        link: Sequelize.STRING,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Disciplina, {
      foreignKey: 'codigodisciplina',
      as: 'codigo',
    });
    this.belongsTo(models.Disciplina, {
      foreignKey: 'professorassociado',
      as: 'professor_ass',
    });
    this.belongsTo(models.Disciplina, {
      foreignKey: 'nomedisciplina',
      as: 'nome',
    });
  }
}
export default Uploads;
