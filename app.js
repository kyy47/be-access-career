const express = require("express");
const careerRoute = require("./routes/career.route");
const app = express();

app.use("/career", careerRoute);

app.listen(4000, () => {
  console.log(`server is running in port ${4000}`);
});
