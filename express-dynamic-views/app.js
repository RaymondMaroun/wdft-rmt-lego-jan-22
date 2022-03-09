const express = require('express');
 
// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
    let data = {
      name: "Ironhacker",
      lastName: "Rocking it!",
      address: {
        street: "Your heart",
        number: 87
      },
      cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]
    };
   
    res.render("index", data);
  });



app.listen(3000, () => console.log('My first app listening on port 3000! '));