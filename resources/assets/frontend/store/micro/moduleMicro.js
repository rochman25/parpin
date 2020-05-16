import state from './moduleMicroState.js'
import mutations from './moduleMicroMutations.js'
import actions from './moduleMicroActions.js'
import getters from './moduleMicroGetters.js'

export default {
    isRegistered: false,
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}