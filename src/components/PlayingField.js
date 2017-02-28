import React from 'react';

class PlayingField extends React.Component {
  render() {
    return (
      <section className="holes">
  			<svg id="skeeball" viewBox="0 0 464 561.8">
  				<path fill="#EAEAAE" stroke="black" strokeWidth="15px" d="M7.5,7.5h449v325.2c0,0,4,221.6-224.5,221.6S7.5,341.9,7.5,341.9V7.5z"/>
  					<ellipse data-score="50" cx="232" cy="73.4" rx="44.5" ry="44.5"/>
  					<ellipse data-score="100" cx="397" cy="67.4" rx="31.5" ry="31.5"/>
  					<ellipse data-score="100" cx="67" cy="67.4" rx="31.5" ry="31.5"/>
  					<ellipse fill="limegreen" cx="232" cy="286.7" rx="158.5" ry="158.5"/>
  					<ellipse data-score="30" cx="232" cy="285.4" rx="44.5" ry="44.5"/>
  					<ellipse data-score="40" cx="232" cy="183.4" rx="44.5" ry="44.5"/>
  					<ellipse data-score="20" cx="232" cy="387.4" rx="44.5" ry="44.5"/>
  					<ellipse data-score="10" cx="232" cy="502.4" rx="44.5" ry="44.5"/>
  			</svg>
      </section>
    )
  }
}

export default PlayingField;
