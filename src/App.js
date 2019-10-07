import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App({ state }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Aside />
        <main className="main">
          <Route 
            path='/profile' 
            render={ () => <Profile postsData={state.profilePage.postsData} /> } 
          />
          <Route 
            path='/dialogs' 
            render={ () => <Dialogs 
                              dialogsData={state.dialogsPage.dialogsData} 
                              msgs={state.dialogsPage.msgs} /> } 
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
    </BrowserRouter>
  );
}

export default App;
