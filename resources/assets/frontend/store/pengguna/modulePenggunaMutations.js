export default {
    ADD_ITEM(state, item) {
        state.pengguna.unshift(item)
    },
    SET_PENGGUNA(state, pengguna) {
        state.pengguna = pengguna
    },
    UPDATE_PENGGUNA(state, pengguna) {
        const productIndex = state.pengguna.findIndex((p) => p._id == pengguna._id)
        Object.assign(state.pengguna[productIndex], pengguna)
    },
    REMOVE_ITEM(state, itemId) {
        const ItemIndex = state.pengguna.findIndex((p) => p._id == itemId)
        state.pengguna.splice(ItemIndex, 1)
    },
}