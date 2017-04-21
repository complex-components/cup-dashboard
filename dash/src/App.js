import React, { Component } from 'react'
import logo from './cccc-logo.png'
import Team from './components/team'
import './App.css'

class App extends Component {
  render () {
    const teams = this.props.teams

    return (
      <div className='App'>
        <div className='App-header'>
          <div><h2>Leader</h2></div>
          <div><img src={logo} className='App-logo' alt='logo' /></div>
          <div><h2>Board</h2></div>
        </div>
        <div className='teams'>
          {
            teams.map(team => <Team team={team} />)
          }
        </div>
      </div>
    )
  }
}

export default App
