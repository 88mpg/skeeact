require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Scoreboard from './Scoreboard';
import PlayingField from './PlayingField';
import RemainingBalls from './RemainingBalls';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Scoreboard/>
        <PlayingField/>
        <RemainingBalls/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
