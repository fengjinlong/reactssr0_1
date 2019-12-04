import { createStore } from 'redux'
const state = {
  data: '空'
}

function reducer (initState = state, action) {
  switch (action.type) {
    case "CHANGE_DATA":
      return { ...initState, data: action.payload};
    default:
      return {...initState}
  }
}

export function createClientStore () {
  return createStore(reducer, window.REDUX_DATA)
}
export function createServerStore () {
  return createStore(reducer)
}