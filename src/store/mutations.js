import * as types from './mutations_type'

export default {
  [types.LOGIN] (state, item) {
    state.user = item
    sessionStorage.setItem('user', state.user)
    state.isLogin = true
  },
  [types.SIGNOUT] (state) {
    // state.user = {}
    // sessionStorage.setItem('user', state.user)
    sessionStorage.removeItem('user')
    state.isLogin = false
  }
}
