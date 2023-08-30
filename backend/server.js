const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mainRoute = require("./Components/MainRouter/MainRoute");

const app = express();
/**
 * Handeling cors policy and receiving data type as json
 */
app.use(cors());
app.use(bodyParser.json());

app.use(mainRoute);

const port = 5050;
/**
 * creating the base server
 */
app.listen(port, (err) => {
  if (err) console.log(`Server not running....Because ${err}`);
  console.log(`Server is running on http://localhost:${port}`);
});
