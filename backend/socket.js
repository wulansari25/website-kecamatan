import { Server } from 'socket.io';

let io = null;

/**
 * Inisialisasi Socket.io server dengan HTTP server
 */
export function initSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
  });

  io.on('connection', (socket) => {
    console.log(`⚡ [Socket.io] Client terhubung: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`🔌 [Socket.io] Client terputus: ${socket.id}`);
    });
  });

  return io;
}

/**
 * Mengambil instance Socket.io yang sudah terinisialisasi
 */
export function getIO() {
  if (!io) {
    console.warn('⚠️ [Socket.io] getIO dipanggil sebelum inisialisasi!');
  }
  return io;
}
