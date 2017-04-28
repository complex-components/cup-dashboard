import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk]
middlewares.push(createLogger())

export default function () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers/').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
