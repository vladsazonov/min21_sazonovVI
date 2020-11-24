exports.getDate = socket => {
  setInterval(() => {
    socket.emit('date', Date.now());
  }, 2000);
};
