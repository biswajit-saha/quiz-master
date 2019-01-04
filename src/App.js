import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
