export default {
    ADD_ITEM(state, item) {
        state.notifikasi.unshift(item)
    },
    SET_NOTIFIKASI(state, notifikasi) {
        state.notifikasi = notifikasi
            // console.log(state.alat)
    },
    SET_TOTAL(state, notifikasi) {
        state.jumlah = notifikasi
            // console.log(state.alat)
    },
    SET_TOTAL_NEW(state, notifikasi) {
        state.jumlah_baru = notifikasi
            // console.log(state.alat)
    },
    UPDATE_NOTIFIKASI(state, notifikasi) {
        const productIndex = state.notifikasi.findIndex((p) => p._id == notifikasi._id)
        Object.assign(state.notifikasi[productIndex], notifikasi)
    },
    REMOVE_ITEM(state, itemId) {
        const ItemIndex = state.notifikasi.findIndex((p) => p._id == itemId)
        state.notifikasi.splice(ItemIndex, 1)
    },
}