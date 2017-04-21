import React, { Component } from 'react'
import './score.css'

class Score extends Component {
  render () {
    const score = this.props.score

    return (
      <div className='score'>
        {
          score.map(s => <div className='part'></div>)
        }
      </div>
    )
  }
}

export default Score
