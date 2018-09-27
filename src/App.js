import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import characters from "./characters.json"
import './App.css';

class App extends Component {
  state = {
    characters: characters,
    clicked: [],
    score: 0,
    topScore: 0,
    message: ""
}




  render() {  
  return (
    <div className="container">
      <TopBar 
        score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}
      />
      <Banner />
      
    </div>
  );
}

}

export default App;
