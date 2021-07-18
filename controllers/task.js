const { task } = require("../models");
const createTask = async (req, res) => {
  //cách 1
  //   const newTask = Task.build({
  //     name,
  //     status,
  //   });
  //   await newTask.save();
  //cách 2
  let { name, age, description } = req.body;
  try {
    const foundedTask = await task.findOne({ where: { name } });
    if (foundedTask) return res.status(400).send("Task is already existed");
    const newTask = task.create({ name, age, description });
    res.status(200).send(newTask);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllTask = async (req, res) => {
  try {
    const foundedTasks = await task.findAll();
    if (!foundedTasks) res.status(400).send("No task founded!");
    res.status(200).send(foundedTasks);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getTaskById = async (req, res) => {
  const id = req.params;
  try {
    const foundedTask = await task.findOne({ where: id });
    if (!foundedTask) return res.status(400).send("Task not existed");
    res.status(200).send(foundedTask);
  } catch (error) {}
};
const updateTask = async (req, res) => {
  const id = req.params;
  try {
    const foundedTask = await task.findOne({ where: id });
    if (!foundedTask) return res.status(400).send("Task not founded");
    await foundedTask.update(req.body);
    res.status(200).send("Task updated");
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteTask = async (req, res) => {
  const id = req.params;
  try {
    const foundedTask = await task.findOne({ where: id });
    if (!foundedTask) return res.status(400).send("Task not founded");
    await foundedTask.destroy();
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
};
