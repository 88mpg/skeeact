// require('normalize.css/normalize.css');
// require('styles/App.css');
//
// import React from 'react';
// import Scoreboard from './Scoreboard';
// import PlayingField from './PlayingField';
// import RemainingBalls from './RemainingBalls';
//
// class AppComponent extends React.Component {
//
//   constructor() {
//     super();
//
//     this.reduceBall = this.reduceBall.bind(this);
//     this.updateScore = this.updateScore.bind(this);
//     this.clickHandler = this.clickHandler.bind(this);
//
//     this.state = {
//       score: 0,
//       balls: 9
//     };
//   }
//
//   reduceBall() {
//     const {balls} = this.state;
//     this.setState({
//       balls: this.state.balls - 1
//     });
//   }
//
//   updateScore(value) {
//     const {score} = this.state;
//     this.setState({
//       score: this.state.score + value
//     })
//   }
//
//   clickHandler = score => {
//     const {reduceBall, updateScore} = this.props
//     // reduceBall();
//     updateScore(score);
//   }
//
//   render() {
//     return (
//       <div className="container">
//         <Scoreboard  score={this.state.score} balls={this.state.balls} />
//         <PlayingField reduceBall={this.reduceBall} updateScore={this.updateScore} clickHandler={this.clickHandler} />
//         <RemainingBalls/>
//       </div>
//     );
//   }
// }
//
// AppComponent.defaultProps = {
// };
//
// export default AppComponent;

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Scoreboard from './Scoreboard';
import PlayingField from './PlayingField';
import RemainingBalls from './RemainingBalls';

class AppComponent extends React.Component {

  constructor() {
    super();
    this.updateScore = this.updateScore.bind(this);

    this.state = {
      score: 0,
      balls: 9
    };
  }


  updateScore(amount) {
    const {score, balls} = this.state;
    this.setState({
      balls: balls - 1,
      score: score + amount
    })
  }

  render() {
	const {score, balls} = this.state

    return (
      <div className="container">
        <Scoreboard score={score} balls={balls} />
        <PlayingField updateScore={this.updateScore} />
        <RemainingBalls/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
