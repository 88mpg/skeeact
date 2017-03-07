import React from 'react';

class ScoreLog extends React.Component {

  render() {
    return (
      <table className="results-log">
        <tbody>
          <tr>
            {this.props.log.map((l, i) => <td key={`ball-${i+1}`}>{l}</td>)}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ScoreLog;
