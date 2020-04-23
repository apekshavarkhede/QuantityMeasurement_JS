var assert = require('chai').assert;
var temperature = require('../main/temperature')

describe('Testing for temperature check', function () {

    // check 1 celcius and 33.8 fahrenheit
    it('given 1 celcius and  33.8 fahrenheit when check for equality should return true', function () {
        assert.equal(temperature.celciusConveter(1), temperature.fahrenheitConverter(33.8))
    })

    // check 212 fahrenheit and 100 celcius
    it('given 212 fahrenheit and 100 celcius when check for equality should return true', function () {
        assert.equal(temperature.fahrenheitConverter(212), temperature.celciusConveter(100))
    })
})