export default {
    ADD_ITEM(state, item) {
        state.sensor.unshift(item)
    },
    SET_SENSOR(state, sensor) {
        state.sensor = sensor
    },
    UPDATE_SENSOR(state, sensor) {
        const productIndex = state.sensor.findIndex((p) => p._id == sensor._id)
        Object.assign(state.sensor[productIndex], sensor)
    },
}