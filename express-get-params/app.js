// app.js
const express = require('express');
const app     = express();
const hbs     = require('hbs'); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(myFakeMiddleware);

function myFakeMiddleware(req,res,next) {
    console.log('myFakeMiddleware was called!');
    req.secretValue = 'raymond';
    next();
}

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/users/:username/books/:bookId', (req, res, next) => {
    res.send(req.params);
  });

  app.get('/search', (req, res, next) => {
    res.send(req.query);
  });

  app.get('/', (req, res, next) => {
    res.render('index');
  });

  /* app.js */
app.get('/get-user-info', (req, res) => {
    res.render('user-info-form');
  });

  app.get('/display-user-info', (req, res) => {
    // const name = req.query.name;
    // const age = req.query.age;
    // const superhero = req.query.superhero;
   
    // the same as 3 lines above
    const { name , age, superhero } = req.query;
   
    res.send(`
      Your name is ${name}
      Your age is ${age}
      Your favorite superhero is ${superhero}
    `);
  });

  app.get('/login', (req, res) => res.render('login'));
  
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
   
    res.send(`Email: ${email}, Password: ${password}`);
  });

  app.get('/test', (req, res) => {
    let mySecret = req.secretValue;
    res.send(mySecret);
  });

app.listen(3000, () => console.log('App listening on port 3000!'));
