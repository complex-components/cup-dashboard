export const SHOW_TEAM = 'SHOW_TEAM'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const REFRESH_DATA = 'REFRESH_DATA'

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

export function refreshData (teams) {
  console.log('refreshData')
  return {
    type: REFRESH_DATA,
    payload: {
      teams
    }
  }
}

export const updateData = () => {
  console.log('starting updateData')

  return (dispatch) => {
    const doFetch = () => {
      fetch('https://raw.githubusercontent.com/complex-components/cup-dashboard/master/src/data.json', {cache: 'no-store'})
        .then(response => {
          console.log('json parsing')
          return response.json()
        })
        .then(teams => {
          dispatch(refreshData(teams))
        })
    }
    setInterval(() => {
      doFetch()
    }, 30000)

    doFetch()
  }
}
