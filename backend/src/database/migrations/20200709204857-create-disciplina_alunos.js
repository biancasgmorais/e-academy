module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('disciplina_alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nota1: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      nota2: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      nota3: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      rec: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      codigodisc: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horariodisc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      disciplina: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      nomealuno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      professor: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      nomeprofessor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('disciplina_alunos');
  },
};
