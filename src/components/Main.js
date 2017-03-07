require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import initReactFastclick from 'react-fastclick';
import Scoreboard from './Scoreboard';
import PlayingField from './PlayingField';
import ScoreLog from './ScoreLog';
import GameOver from './GameOver';
import Undo from './Undo';

initReactFastclick();

class AppComponent extends React.Component {

  constructor() {
    super();

    this.updateScore = this.updateScore.bind(this);
    this.manuallyEnterScore = this.manuallyEnterScore.bind(this);
    this.undo = this.undo.bind(this);
    this.restartGame = this.restartGame.bind(this);

    this.state = {
      score: 0,
      balls: 9,
      log: []
    };
  }

  undo() {
    const {score, balls, log} = this.state;
    const lastScore = log.pop();
    if (balls < 9) {
      this.setState({
        balls: balls + 1,
        score: score - lastScore,
        log
      })
    }
  }

  updateScore(amount) {
    const {score, balls, log} = this.state;
    if (balls > 0) {
      this.setState({
        balls: balls - 1,
        score: score + amount,
        log: log.concat(amount)
      })
    }
  }

  manuallyEnterScore() {
    const {score} = this.state;
    const newScore = parseInt(prompt('What score did you get?', score));
    // TODO: create score validation
    this.setState({ score: newScore });
  }

  restartGame() {
    const {score, balls} = this.state;
    this.setState({
      balls: 9,
      score: 0,
      log: []
    });
  }

  render() {
	  const {score, balls, log} = this.state;

    if (balls < 1) {
      return (
        <GameOver
          restartGame={this.restartGame}
          manuallyEnterScore={this.manuallyEnterScore}
          score={score}
        />
      )
    }

    return(
      <div className="container">
        <Scoreboard
          score={score}
          balls={balls}
        />
        <PlayingField updateScore={this.updateScore} />
        <ScoreLog
          balls={balls}
          log={log}
        />
        { balls < 9 && <Undo undo={this.undo} /> }
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
