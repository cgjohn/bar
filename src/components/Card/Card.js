import React, { Component } from 'react'

import './card.scss'

export default class Card extends Component {
  render() {
    const letterPositionInt = parseInt(this.props.letterPosition, 10);
    const letter = String.fromCharCode('A'.charCodeAt() + letterPositionInt);
    const leftPercentage = 95 / 26 * letterPositionInt + '%';
    const bottomPercentage =  this.props.className ? 100 + letterPositionInt - 2 + '%' : 100 + letterPositionInt + '%';

    const style = {
      bottom: bottomPercentage,
      cursor: 'pointer',
      left: leftPercentage,
      position: 'absolute'
    }
    return (
        <div onClick={this.props.onClick} data-tool-tip={letter} style={style} className={['Card__circle', this.props.className].join(' ')}>
          <span className='tab-letter'>{letter}</span>
        </div>
    )
  }
}
