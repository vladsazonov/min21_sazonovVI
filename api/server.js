const express = require('express');
const bodyParser = require('body-parser');
const app = express(),
  port = 3080;

const users = [{ email: 'test@test.ru', password: '123' }];

app.use(bodyParser.json());

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json('user addedd');
});

app.post('/api/login', (req, res) => {
  const user = users.find(user => user.email === req.body.email && user.password === req.body.password);

  if (user) {
    res.json(user);
  } else {
    res.status(422).send({
      errors: 'wrong email or password'
    });
  }
});

app.post('/api/register', (req, res) => {
  const newUser = { email: req.body.email, password: req.body.password };

  users.push(newUser);
  res.json('user addedd');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
