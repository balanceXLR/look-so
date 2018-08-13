import * as types from './mutations_type'

export default {
  [types.LOGIN] (state, item) {
    state.user = item
    sessionStorage.setItem('user', state.user)
  },
  [types.SIGNOUT] (state) {
    state.user = {}
    sessionStorage.setItem('user', state.user)
  }
}
