import React from 'react';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';

import { initializedApp } from './redux/app-reducer';
import store from './redux/redux-store';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Aside from './components/Aside/Aside';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
            render={ withSuspense(ProfileContainer) } 
          />
          <Route 
            path='/dialogs' 
            render={ withSuspense(DialogsContainer) } 
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

const AppWithRouter = compose(
  withRouter,
  connect(mstp, {initializedApp}),
)(App);

const MainApp = props => (
  <BrowserRouter>
      <Provider store={store}>
          <AppWithRouter />
      </ Provider>
  </BrowserRouter>
);

export default MainApp;