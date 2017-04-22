import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import data from './data'

ReactDOM.render(
  <App teams={data} />,
  document.getElementById('root')
)
