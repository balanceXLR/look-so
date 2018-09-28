import * as types from './mutations_type'
export default {
  login ({ commit }, item) {
    commit(types.LOGIN, item)
  }
}
