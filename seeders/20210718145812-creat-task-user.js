"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "task_user",
      [
        {
          task_id: 1,
          user_id: 1,
        },
        {
          task_id: 2,
          user_id: 1,
        },
        {
          task_id: 3,
          user_id: 4,
        },
        {
          task_id: 5,
          user_id: 6,
        },
        {
          task_id: 4,
          user_id: 2,
        },
        {
          task_id: 3,
          user_id: 3,
        },
        {
          task_id: 6,
          user_id: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("task_user", null, {});
  },
};
