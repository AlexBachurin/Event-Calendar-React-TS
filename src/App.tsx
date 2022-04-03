import { Layout } from 'antd';
import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useTypedSelector } from './hooks/useTypedSelector';
import { IEvent } from './models/IEvent';
import { iUser } from './models/IUser';
import { AuthActionCreators } from './store/reducers/auth/action-creators';
import { EventActionCreators } from './store/reducers/event/action-creators';

function App() {
  const dispatch = useAppDispatch();
  //navigate to event page after successfull login
  let navigate = useNavigate();
  const {isAuth} = useTypedSelector(state => state.authReducer);
  useEffect(() => {
      if (isAuth) {
        navigate('/event')
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  //Prevent logout on page reload, check local storage for auth, if we have it, then get it and set user
  //also display events after reload page
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const events = localStorage.getItem('events') || '[]'
    if (auth) {
      dispatch(AuthActionCreators.setIsAuth(true));
      dispatch(AuthActionCreators.setUser({username: localStorage.getItem('username' || '')} as iUser))
    }
    dispatch(EventActionCreators.setEvents(JSON.parse(events) as IEvent[]))
  }, [])
  
  
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
