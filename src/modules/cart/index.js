import * as mutations from './mutations'
import * as getters from './getters'
import state from './state'

const namespaced = true

export default {
  namespaced,
  state,
  mutations,
  getters
}
