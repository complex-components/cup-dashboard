import data from '../data'
import { SHOW_TEAM, UPDATE_SCORE } from '../reducers'

const initialState = data.map(t => {
  t.visible = false
  return t
})

export default (state = initialState, action) => {
  console.log(`action: ${JSON.stringify(action)}`)
  switch (action.type) {
    case SHOW_TEAM: {
      console.log(`SHOW_TEAM: ${JSON.stringify(action.payload)}`)
      return state
    }

    case UPDATE_SCORE: {
      console.log(`UPDATE_SCORE: ${JSON.stringify(action.payload)}`)
      return state
    }

    default:
      return state
  }
}
