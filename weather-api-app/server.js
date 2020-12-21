const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const city = req.body.cityName;
  const apiKey = "4d84430917405bc03c02c9597bc84f72";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weather = JSON.parse(data);
      const temp = weather.main.temp;
      const weatherDescription = weather.weather[0].description;
      const icon = weather.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(
        `<h1>The temperature at ${city} is ${temp} and weather looks like ${weatherDescription}</h1>`
      );
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
