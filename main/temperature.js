class Temperature {

    celciusConveter(temperature) {
        return temperature * (9 / 5) + 32
    }

    fahrenheitConverter(temperature) {
        return temperature
    }
}
module.exports = new Temperature()