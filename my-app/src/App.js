import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  Dashboard  from './components/Dashboard'
import addTeamReducer from './reducers/reducers'

const store = createStore(addTeamReducer);

export default class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
             <Dashboard/>
          </Provider>
      );
  }
}
