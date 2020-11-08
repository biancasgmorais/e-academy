module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('disciplinas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carga_horaria: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      professor_ass: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      nomeprof: {
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
    return queryInterface.dropTable('disciplinas');
  },
};
