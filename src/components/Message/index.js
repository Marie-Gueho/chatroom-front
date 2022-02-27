// == Import
import './style.css';

const Message = ({ content, author }) => {

  return (
    <li className='message'>
      <p className='message-author'>{author}</p>
      <p className='message-content'>{content}</p>
    </li>
  )
}

export default Message;