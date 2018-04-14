import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>      
    );
  }
}

export default App;
