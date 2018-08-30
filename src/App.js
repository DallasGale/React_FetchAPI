import React, { Component } from 'react';
import logo from './logo.svg';
import NewsArticles from './containers/newsArticles.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fetching NewsAPI.org data</h1>
        </header>
       
       <NewsArticles />
      </div>
    );
  }
}

export default App;
