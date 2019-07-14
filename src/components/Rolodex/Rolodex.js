import React, { Component } from 'react';
import Card from '../Card/Card'

import './rolodex.scss'
import RecipeList from '../RecipeList/RecipeList';

class Rolodex extends Component {
  state = {
    clickedLetterInt: null
  }

  letterClickHandler = (letterPosition) => {
    // const clickedLetter = String.fromCharCode('A'.charCodeAt() + letterPosition)
    this.setState({
      clickedLetterInt: letterPosition
    })
  }

  resetClickedLetter = () => {
    this.setState({
      clickedLetterInt: null
    })
  }

  render() {
    const cards = [...Array(26).keys()].reverse().map((i) => {
      const foldedClass = i < this.state.clickedLetterInt ? 'card__folded' : null;
      return (
        <Card 
          className={foldedClass}
          key={i}
          onClick={() => this.letterClickHandler(i)}
          letterPosition={i} 
        />
      )
    });

    const letterClicked = this.state.clickedLetterInt
    const rolodex = (
      <div className='rolodex'>
        {cards}
      </div>
    )
    return (
      <div>
        {letterClicked ? <RecipeList resetClickedLetter={this.resetClickedLetter} clickedLetterInt={letterClicked}/> : rolodex}
      </div>
    )
  }
}

export default Rolodex