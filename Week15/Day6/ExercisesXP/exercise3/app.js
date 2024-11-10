const express = require("express");
const app = express();
const router = require("./routes/books.js");
// note that the bodyparsing must be used before the routing for which it is required.
app.use(express.json());

app.use(router);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});