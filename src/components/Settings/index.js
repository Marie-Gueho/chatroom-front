// == Import
import { useDispatch, useSelector } from 'react-redux';
import { openSettings, logout } from 'src/actions';

import './style.css';

import Login from '../Login';

const Settings = () => {
  const dispatch = useDispatch();

  const opened = useSelector(state => state.openSettings)
  const {logged, user} = useSelector(state => state)

  const formStatus = opened ? 'login-form' : 'hidden';
  const btnStatus = opened ? 'close-form' : 'open-form';

  const toggleSettings = () => {
    dispatch(openSettings());
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className='settings'>
      
      <button className={`settings-btn ${btnStatus}`} type='button' onClick={toggleSettings}>+</button>
      {!logged &&
        <Login className={formStatus} />
      }
      {logged && 
        <>
          <p>Bienvenue {user} </p>
          <button className={formStatus} type='button' onClick={handleLogout}>Se déconnecter</button>
        </>
      }
    </div>
  )
}

export default Settings;