import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula_aluno: Sequelize.BIGINT,
        email: Sequelize.STRING,
        name: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (aluno) => {
      if (aluno.password) {
        aluno.password_hash = await bcrypt.hash(aluno.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Aluno;
