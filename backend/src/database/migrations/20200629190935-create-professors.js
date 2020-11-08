module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('professors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      matricula_prof: {
        type: Sequelize.BIGINT,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      formacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      escolaridade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    return queryInterface.dropTable('professors');
  },
};