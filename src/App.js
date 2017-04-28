import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './cccc-logo.png'
import Team from './components/team'
import { showTeam, updateScore } from './actions'
import './App.css'

class App extends Component {
  componentDidUpdate () {
    console.log(`componentDidUpdate`)
  }

  render () {
    let pos = 0
    console.log(this.props)
    const teams = this.props.teams
      .map(t => {
        t.points = t.score.reduce((s, score, i) => {
          return s + score.points
        }, 0)
        return t
      })
      // .filter(t => t.visible)
      .sort((t1, t2) => t1.points < t2.points)
      .map(t => {
        pos += 1
        t.position = pos
        return t
      })

    setTimeout(() => {
      console.log(`Showing team ${this.props.teams[0].name}`)
      showTeam(this.props.teams[0])
    }, 3000)

    return (
      <div className='App'>
        <div className='App-header'>
          <div><h2>Leader</h2></div>
          <div><img src={logo} className='App-logo' alt='logo' /></div>
          <div><h2>Board</h2></div>
        </div>
        <div className='teams'>
          {
            teams.map(team => <Team key={team.github} team={team} />)
          }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return { teams: state }
  },
  (dispatch) => {
    return {
      showTeam: team => dispatch(showTeam(team)),
      updateScore: team => dispatch(updateScore(team))
    }
  }
)(App)
