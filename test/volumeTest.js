var assert = require('chai').assert;
var volume = require('../main/volume')

describe.only('Testing for voulume measurement', function () {

    // check 1 gallon and 1 gallon
    it('given 1 gallon and 1 gallon when check for equality shoul return true', function () {
        assert.equal(volume.gallonConverter(1), volume.gallonConverter(1))
    })

    // check 1 gallon and 3.78 liters
    it('given 1 gallon and 3.78 liters when check for equality shoul return true', function () {
        assert.equal(volume.gallonConverter(1), volume.literConverter(3.78))
    })

    // check 1 liter and 1000 ml
    it('given 1 liter and 1000 milileters when check for equality should return true', function () {
        assert.equal(volume.literConverter(1), volume.mlConverter(1000))
    })

    // add 1 gallon and 1 gallon
    it('given 1 gallon and 1 gallon when add should return 7.56 liters', function () {
        let resultOfAddition = volume.addVolumes(volume.gallonConverter(1), volume.gallonConverter(1))
        assert.equal(7.56, resultOfAddition)
    })

    // add 1 gallon and 3.78
    it('given 1 gallon and 3.78 liters when add should return 7.56 liters', function () {
        let resultOfAddition = volume.addVolumes(volume.gallonConverter(1), volume.literConverter(3.78))
        assert.equal(7.56, resultOfAddition)
    })

    // add 1 liter and 1000 ml
    it('given 1 liter and 1000 ml when add should return 2 liters', function () {
        let resultOfAddition = volume.addVolumes(volume.literConverter(1), volume.mlConverter(1000))
        assert.equal(2, resultOfAddition)
    })

})