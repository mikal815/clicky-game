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

randomizeCharacters = () => {
  characters.sort((a,b) => { return 0.5 - Math.random()});
  this.setState({characters: characters});
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
      <GameBoard>
          
      </GameBoard>
      
    </div>
  );
}

}

export default App;
