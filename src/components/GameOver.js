import React from 'react';

class GameOver extends React.Component {
  render() {
    return (
      <section className="results">
        <p>All done! You scored {this.props.score}</p>
        <button className="reset" onClick={this.props.restartGame}>Reset</button>
        <a className="edit" href="#" onClick={this.props.manuallyEnterScore}>Wrong score? Click here to edit.</a>
      </section>
    )
  }
}

export default GameOver;
