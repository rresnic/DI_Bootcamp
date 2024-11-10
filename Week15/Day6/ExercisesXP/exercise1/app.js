const express = require("express");
const app = express();
const router = require("./routes/index.js");
app.use(router);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});