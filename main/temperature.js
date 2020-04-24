class Temperature {

    // convert celcius to fahrenheit
    celciusConveter(temperature) {
        let result = temperature * (9 / 5) + 32
        return result
    }

    fahrenheitConverter(temperature) {
        return temperature
    }
}
module.exports = new Temperature()