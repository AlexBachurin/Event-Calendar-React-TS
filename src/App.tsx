import { Layout } from 'antd';
import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {

  //navigate to event page after successfull login
  let navigate = useNavigate();
  const {isAuth} = useTypedSelector(state => state.authReducer);
  useEffect(() => {
      navigate('/event')
  }, [isAuth])
  
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
