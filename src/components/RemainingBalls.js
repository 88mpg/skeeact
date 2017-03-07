import React from 'react';

class RemainingBalls extends React.Component {
  render() {
    return (
      <div className="remaining-balls">
        <svg id="remainingBalls" viewBox="0 0 702 82">
          <ellipse className="ball-count-9" ry="34.5" rx="34.5" cx="39.500002" cy="39.5"/>
          <ellipse className="ball-count-8" ry="34.5" rx="34.5" cx="117.589693" cy="39.5"/>
          <ellipse className="ball-count-7" ry="34.5" rx="34.5" cx="195.500002" cy="39.5"/>
          <ellipse className="ball-count-6" ry="34.5" rx="34.5" cx="273.589693" cy="39.5"/>
          <ellipse className="ball-count-5" ry="34.5" rx="34.5" cx="351.500002" cy="39.5"/>
          <ellipse className="ball-count-4" ry="34.5" rx="34.5" cx="429.589693" cy="39.5"/>
          <ellipse className="ball-count-3" ry="34.5" rx="34.5" cx="507.500002" cy="39.5"/>
          <ellipse className="ball-count-2" ry="34.5" rx="34.5" cx="585.589693" cy="39.5"/>
          <ellipse className="ball-count-1" ry="34.5" rx="34.5" cx="662.589693" cy="39.5"/>
        </svg>
      </div>
    )
  }
  // render() {
  //   const remaining = new Array(balls).map((b, i) =>
  //
  //   let remaining;
  //   for (let i; i < balls; i++) {
  //     remaining.push(<ellipse key={`remaining-ball-${i}`} className="ball-count" ry="34.5" rx="34.5" cx="662.589693" cy="39.5"/>);
  //   }
  //
  //     return (
  //       <div className="remaining-balls">
  //         <svg id="remainingBalls" viewBox="0 0 702 82">
  //            {remaining}
  //         </svg>
  //       </div>
  //     )
  //   }
}

export default RemainingBalls;
