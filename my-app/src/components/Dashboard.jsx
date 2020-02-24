import React from 'react';
import Header from './Header.jsx'
import LeftContainer from './LeftContainer.jsx'

export default class Dashboard extends React.Component {
    render() {
        return (
        <div>
           <Header/>
           <LeftContainer/>
        </div>
        );
    }
  }