import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import teams from './teams'

ReactDOM.render(
  <App teams={teams} />,
  document.getElementById('root')
)
