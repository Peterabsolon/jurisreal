const LOAD = 'strv-template/contacts/LOAD'
const LOAD_SUCCESS = 'strv-template/contacts/LOAD_SUCCESS'
const LOAD_FAIL = 'strv-template/contacts/LOAD_FAIL'

const initialState = {
  loaded: false,
  data: null,
  detail: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }
    case LOAD_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: null,
        data: action.result
      })
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      }
    default:
      return state
  }
}

export function isLoaded(globalState) {
  return globalState.contacts && globalState.contacts.loaded
}

export function isLoadedDetail(detailId, globalState) {
  return globalState.contacts && globalState.contacts.detail && globalState.contacts.detail[detailId] && globalState.contacts.detail[detailId].name
}

export function loadContacts() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/contacts')
  }
}
