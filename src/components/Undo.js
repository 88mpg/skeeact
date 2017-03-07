import React from 'react';

class Undo extends React.Component {
  render() {
    return (
      <a href="#" onClick={this.props.undo}>Undo</a>
    )
  }
}

export default Undo;
