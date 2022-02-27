import { CHANGE_VALUE, ADD_MESSAGE, CHANGE_CREDENTIALS, SAVE_USER, OPEN_SETTINGS, LOGOUT } from '../actions';

const initialState = {
  messages: [],
  newMessage: '',
  user: 'Anonyme',
  openSettings: false,
  logged: false,
  credentials: {
    email: '',
    pw: '',
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case ADD_MESSAGE:
      const newMessage = {
        author: action.author,
        content: action.content,
      };
      const newMessages = [...state.messages, newMessage];

      return {
        ...state,
        messages: newMessages,
        newMessage: '',
      };
    case CHANGE_CREDENTIALS:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [action.payload.key]: action.payload.value,
        }  
      };
    case SAVE_USER:
      return {
        ...state,
        user: action.payload.pseudo,
        logged: true,
        openSettings: false,
        credentials: {
          ...state.credentials,
          email: '',
          pw: '',
        }
      };
    case LOGOUT:
      return {
        ...state,
        openSettings: false, 
        user: 'Anonyme',
        logged: false,
      };
    case OPEN_SETTINGS:
      return {
        ...state,
        openSettings: !state.openSettings, 
      };
    default:
      return state;
  }
};

export default reducer;
