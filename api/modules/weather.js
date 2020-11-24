const request = require('request');

exports.getWeather = (url, socket) => {
  request(url, (err, response, body) => {
    if (err) {
      console.log('error:', error);
    } else {
      socket.emit('weather', JSON.parse(body));
    }
  });
};
