// == Import
import {  useSelector } from 'react-redux';

import './style.css';

import Message from '../Message';

const Messages = () => {
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);
  console.log(messages)
  return (
    <ul className='messages'>
      {messages.map((message, index) => (
        <Message 
          key={index} 
          content={message.content} 
          author={message.author}
        />
      ))}
    </ul>
  )
}

export default Messages;