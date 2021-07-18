"use strict";
const { Model } = require("sequelize");
const task = require("./task");
const User = require("./user");
module.exports = (sequelize, DataTypes) => {
  class task_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  task_user.init(
    {
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: task,
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "task_user",
      timestamps: false,
    }
  );
  return task_user;
};
