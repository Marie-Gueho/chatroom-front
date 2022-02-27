export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_CREDENTIALS = 'CHANGE_CREDENTIALS';
export const LOG_USER = 'LOG_USER';
export const SAVE_USER = 'SAVE_USER';
export const OPEN_SETTINGS = 'OPEN_SETTINGS';
export const LOGOUT = 'LOGOUT';
export const WS_CONNECT = 'WS_CONNECT';

export const changeInputValue = (key, value) => ({
  type: CHANGE_VALUE,
  payload: {
    key,
    value
  }
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message,
});

export const addMessage = (content, author) => ({
  type: ADD_MESSAGE,
  content,
  author,
});

export const changeCredentials = (key, value) => ({
  type: CHANGE_CREDENTIALS,
  payload: {
    key,
    value
  }
});

export const logUser = () => ({
  type: LOG_USER,
});

export const openSettings = () => ({
  type: OPEN_SETTINGS,
});

export const saveUser = (userInfo) => ({
  type: SAVE_USER,
  payload: userInfo
});

export const logout = () => ({
  type: LOGOUT,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});


