const bodyParser = require('body-parser');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST']
  }
});

const imageModule = require('./modules/image');
const weatherModule = require('./modules/weather');
const dateModule = require('./modules/date');
const scheduleModule = require('./modules/schedule');

const users = [{ email: 'test@test.ru', password: '123' }];
const apiKey = '3002d67cb8a320168061e244695ed009';
const city = 'rostov-on-don';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

io.on('connection', socket => {
  console.log('a user connected');

  let i = 0;

  imageModule.sendImage(i, socket);

  weatherModule.getWeather(url, socket);

  dateModule.getDate(socket);

  scheduleModule.getSchedule(socket);
});

app.use(bodyParser.json());

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

http.listen(3000, () => {
  console.log(`Server listening on the port`);
});
