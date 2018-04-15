import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>      
    );
  }
}

export default App;
