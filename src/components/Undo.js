import React from 'react';

class Undo extends React.Component {
  render() {
    return (
      <button onClick={this.props.undo}>Undo</button>
    )
  }
}

export default Undo;
