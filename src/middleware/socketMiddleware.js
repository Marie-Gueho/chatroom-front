
import { WS_CONNECT, SEND_MESSAGE, addMessage, LOGOUT } from 'src/actions';
let ws;

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      ws = io('http://localhost:3001');
      ws.on('server_message', (message) => {
        const { content, author } = message;
        store.dispatch(addMessage(content, author));
      });
      break;
    }
    case SEND_MESSAGE: {
      ws = window.io('http://localhost:3001');
      const currentState = store.getState();
      ws.emit('client_message', { content: currentState.newMessage, author: currentState.user });
      break;
    }
    case LOGOUT: {
      const { user } = store.getState();
      ws.emit('client_message', { content: `${user} s'est déconnecté`, author: 'system' });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default socketMiddleware;
