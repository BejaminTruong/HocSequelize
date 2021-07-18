const express = require("express");
const app = express();
require("./db/connect");
const taskRouter = require("./routes/task");
app.use(express.json());
app.use(taskRouter);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
