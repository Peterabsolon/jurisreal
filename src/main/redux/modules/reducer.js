import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'

import auth from './auth'
import demo from './demo'
import contacts from './contacts'
import appState from './appState'
import { reducer as form } from 'redux-form'

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  appState,
  auth,
  form,
  demo,
  contacts
})
