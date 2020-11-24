exports.getSchedule = socket => {
  const currentDate = new Date();
  const startDate = new Date();
  const endDate = new Date();

  if (currentDate >= startDate.setHours(8, 30) && currentDate <= endDate.setHours(9, 50)) {
    socket.emit('schedule', 'Время бодрых');
  }

  if (currentDate >= startDate.setHours(10, 5) && currentDate <= endDate.setHours(10, 15)) {
    socket.emit('schedule', 'Пора завтракать');
  }

  if (currentDate >= startDate.setHours(10, 16) && currentDate <= endDate.setHours(11, 50)) {
    socket.emit('schedule', 'Снова учеба');
  }

  if (currentDate >= startDate.setHours(11, 51) && currentDate <= endDate.setHours(12, 0)) {
    socket.emit('schedule', 'Хочу домой, но пара впереди');
  }

  if (currentDate >= startDate.setHours(12, 1) && currentDate <= endDate.setHours(13, 35)) {
    socket.emit('schedule', 'Ученье свет');
  }

  if (currentDate >= startDate.setHours(13, 36) && currentDate <= endDate.setHours(14, 15)) {
    socket.emit('schedule', 'Ура! Вот теперь-то заживем!');
  }
};
