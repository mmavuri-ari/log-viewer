import React, { Component } from 'react'
import { Header } from './screens/Root'
import './App.css'
import { Block } from 'jsxstyle'
class App extends React.Component {
  
  state = {
    isAuth: false
  }

  render() {
    return (                      
        <Header/>            
    );
  }
}

export default App;
