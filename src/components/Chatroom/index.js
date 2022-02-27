// == Import
import { useEffect  } from 'react';
import { useDispatch } from 'react-redux';
 import { wsConnect } from 'src/actions';

import Settings from '../Settings';
import Messages from '../Messages';
import Form from '../Form';

import './style.css';

export default function Chatroom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <div className='chatroom'>
      <header className='chatroom-header'>
        <h1>Chatroom</h1>
        <Settings />
      </header>
      <Messages />
      <Form />
    </div>
  )
}