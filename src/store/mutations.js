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
  [types.CURRENT] (state, item) {
    sessionStorage.setItem('currentMovie', item)
  },
  [types.RESULT] (state, item) {
    sessionStorage.setItem('searchResult', JSON.stringify(item))
  }
}
