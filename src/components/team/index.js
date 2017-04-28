import React, { Component } from 'react'
import Score from '../score'
import './team.css'

class Team extends Component {
  render () {
    const {name, position, points, members} = this.props.team

    return (
      <div>
        <div className='team'>
          <div className='position'>{position}</div>
          <div className='name'>{name}</div>
          <Score score={points} />
        </div>
        <div className='members'>
          {members.join(', ')}
        </div>
      </div>
    )
  }
}

export default Team
