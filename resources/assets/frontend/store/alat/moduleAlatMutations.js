export default {
    ADD_ITEM(state, item) {
        state.alat.unshift(item)
    },
    SET_ALAT(state, alat) {
        state.alat = alat
            // console.log(state.alat)
    },
    UPDATE_ALAT(state, alat) {
        const productIndex = state.alat.findIndex((p) => p._id == alat._id)
        Object.assign(state.alat[productIndex], alat)
    },
    REMOVE_ITEM(state, itemId) {
        const ItemIndex = state.alat.findIndex((p) => p._id == itemId)
        state.alat.splice(ItemIndex, 1)
    },
}