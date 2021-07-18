"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ task_user }) {
      // define association here
      this.hasMany(task_user, { foreignKey: "task_id" });
    }
  }
  task.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "task",
      timestamps: false,
    }
  );
  return task;
};
