import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Rolodex from '../Rolodex/Rolodex'
import './home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className='home__hero'>
        <Rolodex />
      </div>
    )
  }
}
