import axios from 'axios';
import { LOG_USER, saveUser } from 'src/actions';

const logMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case LOG_USER: {
      const currentState = store.getState();
      axios.post('http://localhost:3001/login', {
        email: currentState.credentials.email,
        password: currentState.credentials.pw,
      })
      .then((res) => {
        store.dispatch(saveUser(res.data));
      })
      .catch((error) => {
        console.log(error.message);
      })
      break;
    };
    default:
    next(action);
  }
  
};

export default logMiddleware;
