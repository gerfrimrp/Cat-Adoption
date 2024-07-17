const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Message } = require('./models'); 
const router = require('./routes'); 
const errorHandler = require('./middlewares/errorHandler'); 

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/messages', async (req, res) => {
  try {
    const { text, sender, recipient, timestamp } = req.body;


    const newMessage = await Message.create({
      text,
      sender,
      recipient,
      timestamp,
    });


    io.emit('message', newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error saving message:', error.message);
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

app.use(router);


app.use(errorHandler);


io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);

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


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = { app, io };
