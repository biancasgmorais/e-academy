module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('uploads', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      codigodisciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      professorassociado: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      nomedisciplina: {
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
    return queryInterface.dropTable('uploads');
  },
};
