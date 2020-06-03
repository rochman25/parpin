import state from './moduleNotifikasiState.js'
import actions from './moduleNotifikasiActions.js'
import getters from './moduleNotifikasiGetters.js'
import mutations from './moduleNotifikasiMutations.js'

export default {
    isRegistered: false,
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}