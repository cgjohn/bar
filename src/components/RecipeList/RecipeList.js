import React, { Component } from 'react'
import './recipe-list.scss'

export default class RecipeList extends Component {
  render() {
    const clickedLetterChar = String.fromCharCode('A'.charCodeAt() + this.props.clickedLetterInt)

    return (
      <div className='recipe-list'>
        this is the recipe card for {clickedLetterChar}
        <button
          className='close-recipes-btn'
          onClick={this.props.resetClickedLetter}
        >
          Close
        </button>
      </div>
    )
  }
}
