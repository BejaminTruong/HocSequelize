"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          name: "John Doe",
          age: 25,
          description: "Learning",
        },
        {
          name: "Mark Gatsby",
          age: 40,
          description: "Teaching",
        },
        {
          name: "Jay Garrick",
          age: 30,
          description: "Acting",
        },
        {
          name: "Jane Rood",
          age: 18,
          description: "Student",
        },
        {
          name: "Chris Lean",
          age: 39,
          description: "Fighting",
        },
        {
          name: "Tom John",
          age: 27,
          description: "Playing",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
