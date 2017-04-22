import React, { Component } from 'react'
import './score.css'

class Score extends Component {
  render () {
    const divs = 10
    const scoreCategories = 10
    const fullPerCategory = 10
    const fullScoreTotal = fullPerCategory * scoreCategories

    const scorePercentage = (this.props.score / fullScoreTotal) * 100

    let bar = []
    for (let i = 0; i < divs; i += 1) {
      bar.push(i < (scorePercentage / divs))
    }

    let i = 0

    return (
      <div className='score'>
        {
          bar.map(b => {
            i += 1
            return <div key={'b' + i} className={b ? 'part on' : 'part off'} />
          })
        }
      </div>
    )
  }
}

export default Score
