import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {

  return (
      <div className="app-wrapper">
        <Header />
        <Aside />
        <main className="main">
          <Route 
            path='/profile' 
            render={ () => 
              <Profile 
                store={props.store}
            /> } 
          />
          <Route 
            path='/dialogs' 
            render={ () => 
              <DialogsContainer
                store={props.store}
            /> } 
          />
          <Route 
            path='/news' 
            component={ News } 
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
