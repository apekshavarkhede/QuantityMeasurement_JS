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

    addVolumes(volume1, volume2) {
        return (volume1 + volume2)
    }
}
module.exports = new Volume();