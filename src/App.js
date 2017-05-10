import React, { Component } from 'react'
import { Header,NavBar,LogData } from './screens/Root'
import './App.css'
import { Block } from 'jsxstyle'
import {
   BrowserRouter as Router
 } from 'react-router-dom'

class App extends React.Component {
  
  state = {
    isAuth: false
  }

  render() {
    return (     
      <Router>
        <Block>               
          <Header/>    
          <NavBar/>            
        </Block> 
      </Router>           
    );
  }
}

export default App;
