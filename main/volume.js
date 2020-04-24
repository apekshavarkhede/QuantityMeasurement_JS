class Volume {

    // convert gallon to liters
    gallonConverter(value) {
        let result = value * (3.78)
        return result
    }

    literConverter(value) {
        return value
    }

    // convert ml to liters 
    mlConverter(value) {
        let result = value * (0.001)
        return result
    }

    // add volumes
    addVolumes(volume1, volume2) {
        let result = volume1 + volume2
        return result
    }
}
module.exports = new Volume();