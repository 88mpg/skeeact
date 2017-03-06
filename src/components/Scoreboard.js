import React from 'react';

class Scoreboard extends React.Component {
  render() {
    return (
      <section className="scoreboard">
  			<span className="score">SCORE: {this.props.score}</span>
  			<span className="count">BALLS LEFT: {this.props.balls}</span>
  		</section>
    )
  }
}

export default Scoreboard;
