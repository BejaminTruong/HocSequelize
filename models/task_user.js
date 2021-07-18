"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class task_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ task, User }) {
      // define association here
      this.belongsTo(task);
      this.belongsTo(User);
    }
  }
  task_user.init(
    {
      task_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "task_user",
      timestamps: false,
    }
  );
  return task_user;
};
