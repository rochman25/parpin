import state from './moduleSensorState.js'
import mutations from './moduleSensorMutations.js'
import actions from './moduleSensorActions.js'
import getters from './moduleSensorGetters.js'

export default {
    isRegistered: false,
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}