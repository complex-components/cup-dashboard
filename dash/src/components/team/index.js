import React, { Component } from 'react'
import Score from '../score'
import './team.css'

class Team extends Component {
  render () {
    const {name, position, score} = this.props.team

    return (
      <div className='team'>
        <div className='position'>{position}</div>
        <div className='name'>{name}</div>
        <Score score={score} />
      </div>
    )
  }
}

export default Team
