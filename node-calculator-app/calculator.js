const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  //   //res.sendFile("index.html"); this works when file is in local machine, but when you host this app it doesnt know what to do
  //   hence we use __dirname
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  var number1 = Number(req.body.number1);
  var number2 = Number(req.body.number2);
  var result = number1 + number2;
  res.send(`The calculation is ${result}`);
});
app.get("/bmicalculator", (req, res) => {
  //   //res.sendFile("index.html"); this works when file is in local machine, but when you host this app it doesnt know what to do
  //   hence we use __dirname
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", (req, res) => {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight / (height * height);
  res.send(`The bmi is ${bmi}`);
});
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
