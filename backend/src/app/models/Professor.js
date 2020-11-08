import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula_prof: Sequelize.BIGINT,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        formacao: Sequelize.STRING,
        escolaridade: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (professor) => {
      if (professor.password) {
        professor.password_hash = await bcrypt.hash(professor.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Professor;
