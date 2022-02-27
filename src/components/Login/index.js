// == Import
import { useDispatch } from 'react-redux';
import { changeCredentials, logUser } from 'src/actions';

import './style.css';

const Login = ({ className }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logUser());
  }

  const handleChange = (e) => {
    dispatch(changeCredentials(e.target.name, e.target.value));
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' onChange={handleChange}/>
      <label htmlFor='pw'>Mot de passe</label>
      <input type='password' name='pw' onChange={handleChange}/>
      <button type='submit'>Se connecter</button>
    </form>
  )
}

export default Login;