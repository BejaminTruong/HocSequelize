"use strict";
const { task, User } = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("task_user", {
      task_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: task,
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("task_user");
  },
};
