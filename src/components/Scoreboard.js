import React from 'react';

class Scoreboard extends React.Component {
  render() {
    return (
      <section className="scoreboard">
  			<span className="score">SCORE: <span className="score--number">0</span></span>
  			<span className="count">BALLS LEFT: <span className="count--number">9</span></span>
  		</section>
    )
  }
}

export default Scoreboard;
