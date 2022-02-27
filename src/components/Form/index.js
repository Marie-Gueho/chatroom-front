// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, changeInputValue } from 'src/actions';

import './style.css';

const Form = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.newMessage);

  const handleChange = (e) => {
    dispatch(changeInputValue(e.target.name, e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(e));
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input name='newMessage' type='text' placeholder='Saisissez votre message' onChange={handleChange} value={inputValue} />
      <button type='submit'>Valider</button>
    </form>
  )
}

export default Form;