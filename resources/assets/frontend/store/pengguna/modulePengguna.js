import state from './modulePenggunaState.js'
import mutations from './modulePenggunaMutations.js'
import actions from './modulePenggunaActions.js'
import getters from './modulePenggunaGetters.js'

export default {
    isRegistered: false,
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}