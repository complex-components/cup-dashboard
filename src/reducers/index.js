import { SHOW_TEAM, UPDATE_SCORE, REFRESH_DATA } from '../actions'

export default (state = {teams: []}, action) => {
  switch (action.type) {
    case SHOW_TEAM: {
      console.log(`SHOW_TEAM: ${JSON.stringify(action.payload)}`)
      return state
    }

    case UPDATE_SCORE: {
      console.log(`UPDATE_SCORE: ${JSON.stringify(action.payload)}`)
      return state
    }

    case REFRESH_DATA: {
      return {
        ...state,
        teams: action.payload.teams
      }
    }

    default:
      return state
  }
}
