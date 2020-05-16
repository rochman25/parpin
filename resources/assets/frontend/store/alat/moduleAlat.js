import state from './moduleAlatState.js'
import actions from './moduleAlatActions.js'
import getters from './moduleAlatGetters.js'
import mutations from './moduleAlatMutations.js'

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}