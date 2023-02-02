const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userroute } = require("./routes/user.route");
require("dotenv").config();
const port = 8080 || process.env.port;

const app = express();

app.use(express.json());

app.use(cors());
// users app routing
app.use("/auth", userroute);

app.use("/", async (req, res) => {
  if (req.url == "/") {
    res.send("home page");
  }
  if (req.url == "*") {
    res.send("please enter a correct url path");
  }
});

app.listen(port, () => {
  connection();
  console.log(`listening on http://localhost:${port}/`);
});
