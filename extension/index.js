const SERVER_URL = 'http://localhost:3000';

const socket = io(`${SERVER_URL}/connection`, {
  transports: ['websocket'],
});

const statusEl = document.getElementById('status');

socket.on('connect', () => {
  console.log('Connected to server', socket.id);
  statusEl.textContent = 'Connected to server';
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
  statusEl.textContent = 'Disconnected from server';
});

socket.on('message', (data) => {
  console.log('Server:', data);
});

socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
  statusEl.textContent = 'Error connecting to server';
});
