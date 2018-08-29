import React, { Component } from 'react';
import logo from './logo.svg';
import NewsHeadlines from './containers/newsApi';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fetching NewsAPI.org data</h1>
        </header>
       
       <NewsHeadlines />
      </div>
    );
  }
}

export default App;
