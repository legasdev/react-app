import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Aside from './components/Aside/Aside';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {

  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Aside />
        <main className="main">
          <Route 
            path='/profile/:userId?' 
            render={ () => <ProfileContainer /> } 
          />
          <Route 
            path='/dialogs' 
            render={ () => <DialogsContainer /> } 
          />
          <Route 
            path='/news' 
            component={ News } 
          />
          <Route
            path='/users'
            render={ () => <UsersContainer /> }
          />
          <Route 
            path='/music' 
            render={ () => <Music /> } 
          />
          <Route 
            path='/settings' 
            render={ () => <Settings /> } 
          />
        </main>
      </div>
  );
}

export default App;
