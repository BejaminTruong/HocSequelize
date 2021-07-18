"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "johnDoe@gmail.com",
        },
        {
          name: "Jane Froster",
          email: "janeFroster@gmail.com",
        },
        {
          name: "Scott Lang",
          email: "scottLang@gmail.com",
        },
        {
          name: "Chris Evan",
          email: "chrisEvan@gmail.com",
        },
        {
          name: "Robert Downey Jr",
          email: "robertDowneyJr@gmail.com",
        },
        {
          name: "Mark Ruffalo",
          email: "markRuffalo@gmail.com",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
