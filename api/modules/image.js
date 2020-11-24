exports.sendImage = (i, socket) => {
  setInterval(() => {
    i++;

    switch (i) {
      case 10: {
        socket.emit('image', 'raccoon');
        setTimeout(() => {
          socket.emit('image', '');
        }, 5000);
        break;
      }
      case 30: {
        socket.emit('image', 'fox');
        setTimeout(() => {
          socket.emit('image', '');
        }, 5000);
        break;
      }
      case 50: {
        socket.emit('image', 'hamster');
        setTimeout(() => {
          socket.emit('image', '');
        }, 5000);
        break;
      }
      case 60: {
        i = 0;
        break;
      }
    }
  }, 1000);
};
