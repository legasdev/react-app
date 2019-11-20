import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { initializedApp } from './redux/app-reducer';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Aside from './components/Aside/Aside';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    return !this.props.initialized
      ? <Preloader />
      : (
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
            render={ () => <News /> } 
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
          <Route
            path='/login'
            render={ () => <Login /> } 
          /> 
        </main>
      </div>
    );
  }
  
}

const mstp = state => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mstp, {initializedApp}),
)(App);
