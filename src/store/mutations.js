import * as types from './mutations_type'

export default {
  [types.LOGIN] (state, item) {
    state.user = item
    sessionStorage.setItem('user', JSON.stringify(state.user))
    state.isLogin = true
  },
  [types.SIGNOUT] (state) {
    sessionStorage.removeItem('user')
    state.user = {}
    state.isLogin = false
  },
  [types.SEARCH] (state, item) {
    state.currentMovie = item
  }
}
