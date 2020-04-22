class Volume {

    gallonConverter(value) {
        return value * (3.78)
    }

    literConverter(value) {
        return value
    }
}
module.exports = new Volume();