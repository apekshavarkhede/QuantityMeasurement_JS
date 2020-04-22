class Volume {

    gallonConverter(value) {
        return value * (3.78)
    }

    literConverter(value) {
        return value
    }

    mlConverter(value) {
        return (value * (0.001))
    }
}
module.exports = new Volume();