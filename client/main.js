function createSocket() {
  const socketUrl = 'ws://localhost:3000/cable'
  const socket = new WebSocket(socketUrl);

  socket.onopen = function(_event) {
    console.log('Connected to server!');
    const msg = {
      command: 'subscribe',
      identifier: JSON.stringify({
        id: 1,
        channel: 'AlertsChannel'
      })
    }
    socket.send(JSON.stringify(msg));
  }

  socket.onmessage = function(event) {
    const data = JSON.parse(event.data);

    if(data.type === 'ping') return;

    if(data.message) {
      console.log('Received data from server:', data.message);
    }
  }

  socket.onclose = function(_event) {
    console.log('Disconnected from the server');
  }

  socket.onerror = function(error) {
    console.error('Websocket error observed:', error);
  }
}

createSocket();
