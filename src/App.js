import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import GameBoard from "./components/GameBoard";
import Card from "./components/Card";
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
    characters.sort((a, b) => { return 0.5 - Math.random() });
    this.setState({ characters: characters });
  }


  clickedCard = id => {
    const clicked = this.state.clicked;
    clicked.push(id);
    this.setState({clicked: clicked});
    console.log(this.state.clicked);
  
    this.randomizeCharacters();
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
          {this.state.characters.map(character => (
            <Card
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              checkClicked={this.checkClicked}
            />
          ))}
        </GameBoard>

      </div>
    );
  }

}

export default App;
