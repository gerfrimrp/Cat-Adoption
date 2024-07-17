const { io } = require('./bin/www');
const { Message } = require('./models'); 

const messages = [];

io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.emit('messages', messages);

  socket.on('message', async (message) => {
    try {
  
      const newMessage = await Message.create(message);


      io.emit('message', newMessage);
    } catch (error) {
      console.error('Error saving message:', error.message);
    }
  });

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});
