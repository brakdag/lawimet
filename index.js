const express = require('express')
const ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs');

app.get("/", (request, response) => {
  response.render(__dirname + "/views/");
});;

const listener =app.listen(process.env.PORT|5000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

