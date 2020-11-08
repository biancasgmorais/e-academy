import Sequelize from 'sequelize';

import User from '../app/models/User';
import Professor from '../app/models/Professor';
import Aluno from '../app/models/Aluno';
import Disciplina from '../app/models/Disciplina';
import DisciplinaAluno from '../app/models/DisciplinaAluno';
import Uploads from '../app/models/Uploads';

import databaseConfig from '../config/database';

const models = [User, Disciplina, Professor, Aluno, DisciplinaAluno, Uploads];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}
export default new Database();
