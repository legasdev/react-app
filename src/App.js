import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

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
                profilePage={props.state.profilePage}
                addPost={props.addPost} 
                updateNewPostText={props.updateNewPostText}
            /> } 
          />
          <Route 
            path='/dialogs' 
            render={ () => 
              <Dialogs 
                dialogsData={props.state.dialogsPage.dialogsData} 
                msgs={props.state.dialogsPage.msgs}
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
