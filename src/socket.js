import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

export const socket = io(SOCKET_URL, {
  autoConnect: true,
  transports: ['websocket', 'polling']
});

socket.on('connect', () => {
  console.log('⚡ [Frontend] Connected to Socket.io server:', socket.id);
});

socket.on('disconnect', () => {
  console.log('🔌 [Frontend] Disconnected from Socket.io server');
});
