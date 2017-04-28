export const SHOW_TEAM = 'SHOW_TEAM'
export const UPDATE_SCORE = 'UPDATE_SCORE'

export function showTeam (team) {
  return {
    type: SHOW_TEAM,
    payload: {
      team
    }
  }
}

export function updateScore (team) {
  return {
    type: UPDATE_SCORE,
    payload: {
      team
    }
  }
}
