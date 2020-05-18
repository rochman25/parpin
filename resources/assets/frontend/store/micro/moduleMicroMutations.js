export default {
    ADD_ITEM(state, item) {
        state.micro.unshift(item)
    },
    SET_MICRO(state, micro) {
        state.micro = micro
    },
    UPDATE_MICRO(state, micro) {
        const productIndex = state.micro.findIndex((p) => p._id == micro._id)
        Object.assign(state.micro[productIndex], micro)
    },
    REMOVE_ITEM(state, itemId) {
        const ItemIndex = state.micro.findIndex((p) => p._id == itemId)
        state.micro.splice(ItemIndex, 1)
    },
}