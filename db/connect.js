const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "bumou4boljqnjdcigx3m",
  "ut5ctaml3uffpgej",
  "3VwMSqiWgViLYemcnPHI",
  {
    host: "bumou4boljqnjdcigx3m-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);
const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to server...");
  } catch (error) {
    console.log(error);
  }
};
checkConnect();
// đồng bộ model ở nodejs và database
const syncModel = async () => {
  //await Task.sync({ force: true }); // nếu có thay đổi ở code thì ở db sẽ xoá bảng cũ đi và tạo bảng mới
  await sequelize.sync({ alter: true }); //nếu có thay đổi ở code thì ở db sẽ sửa bảng cũ thành bảng mới
  console.log("Model is synced");
};
syncModel();
module.exports = sequelize;
