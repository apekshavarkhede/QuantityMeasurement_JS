var assert = require('chai').assert;
var quantity = require('../main/quantity')
var volume = require('../main/volume')
var weight = require('../main/weights')

describe('Testing for Quantity Check', function () {
    it('should return true if quantities are equal', function () {
        assert.equal(quantity.feetConverter(0), quantity.feetConverter(0))
    })

    it('should return false if quantities are not equal', function () {
        assert.notEqual(quantity.feetConverter(1), quantity.feetConverter(0))
    })

    it('given 0 Feet and null should return null ', function () {
        assert.isNull(null, quantity.feetConverter(0))
    })

    it('given 0 Feet should return type as number ', function () {
        assert.typeOf(quantity.feetConverter(0), 'number')
    })

    it('given 0 inch and 0 inch when check for equality should return true', function () {
        assert.equal(quantity.inchConverter(0), quantity.inchConverter(0))
    })


    it('given 0 inch and 1 inch when check for equality should return false', function () {
        assert.notEqual(quantity.inchConverter(0), quantity.inchConverter(1))
    })

    it('given 0 inch and null when check for equality should return false', function () {
        assert.isNull(quantity.inchConverter(null), quantity.inchConverter(0))
    })

    it('given 0 Feet should return type as number ', function () {
        assert.equal('number', typeof (quantity.inchConverter(0)))
    })

    it('given 1 feet and 1 inch when check for equality should return false', function () {
        assert.notEqual(quantity.feetConverter(1), quantity.inchConverter(1))
    })

    it('given 1 feet and 1 inch when check for equality should return false', function () {
        assert.notEqual(quantity.feetConverter(1), quantity.inchConverter(1))
    })

    it('given 1 Feet and 12 inches when check for equality should true', function () {
        assert.equal(quantity.feetConverter(1), quantity.inchConverter(12))
    })

    it('given 3 Feet and 1 Yard when check for equality should return true', function () {
        assert.equal(quantity.feetConverter(3), quantity.yardConverter(1))
    })

    it('given 1 Feet and 1 Yard when check for equality should return false', function () {
        assert.notEqual(quantity.feetConverter(1), quantity.yardConverter(1))
    })

    it('given 1 Inch and 1 Yard when check for equality should return false', function () {
        assert.notEqual(quantity.inchConverter(1), quantity.yardConverter(1))
    })

    it('given 1 Yard and 36 Inch when check for equality should return true', function () {
        assert.equal(quantity.yardConverter(1), quantity.inchConverter(36))
    })

    it('given 36 Inches and 1 Yard when check for equality should return true', function () {
        assert.equal(quantity.inchConverter(36), quantity.yardConverter(1))
    })

    it('given 1 Yard and 3 Feet when check for equality should return true', function () {
        assert.equal(quantity.yardConverter(1), quantity.feetConverter(3))
    })

    it('given 1 Inch  and 2.54 cm when check for equality should return true', function () {
        assert.equal(quantity.inchConverter(1), quantity.cmConverter(2.54))
    })

    it('given 2 Inch  and 5 cm when check for equality should return true', function () {
        assert.equal(quantity.inchConverter(2), quantity.cmConverter(5))
    })

    it('given 2 inch and 2 inch when add should return 4 inches', function () {
        let resultOfAddition = quantity.addLength(quantity.inchConverter(2), quantity.inchConverter(2))
        assert.equal(4, resultOfAddition)
    })

    it('given 1 Feet and 2 inch when add should return 4 inches', function () {
        let resultOfAddition = quantity.addLength(quantity.feetConverter(1), quantity.inchConverter(2))
        assert.equal(14, resultOfAddition)
    })

    it('given 1 Feet and 1 feet when add should return 24 inches', function () {
        let resultOfAddition = quantity.addLength(quantity.feetConverter(1), quantity.feetConverter(1))
        assert.equal(24, resultOfAddition)
    })

    it('given 2 Inch and 2.5 cm when add should return 3 inches', function () {
        let resultOfAddition = quantity.addLength(quantity.inchConverter(2), quantity.cmConverter(2.5))
        assert.equal(3, resultOfAddition)
    })

    it('given 1 gallon and 1 gallon when check for equality shoul return true', function () {
        assert.equal(volume.gallonConverter(1), volume.gallonConverter(1))
    })

    it('given 1 gallon and 3.78 liters when check for equality shoul return true', function () {
        assert.equal(volume.gallonConverter(1), volume.literConverter(3.78))
    })

    it('given 1 liter and 1000 milileters when check for equality should return true', function () {
        assert.equal(volume.literConverter(1), volume.mlConverter(1000))
    })

    it('given 1 gallon and 1 gallon when add should return 7.56 liters', function () {
        let resultOfAddition = volume.addVolumes(volume.gallonConverter(1), volume.gallonConverter(1))
        assert.equal(7.56, resultOfAddition)
    })

    it('given 1 gallon and 3.78 liters when add should return 7.56 liters', function () {
        let resultOfAddition = volume.addVolumes(volume.gallonConverter(1), volume.literConverter(3.78))
        assert.equal(7.56, resultOfAddition)
    })

    it('given 1 liter and 1000 ml when add should return 2 liters', function () {
        let resultOfAddition = volume.addVolumes(volume.literConverter(1), volume.mlConverter(1000))
        assert.equal(2, resultOfAddition)
    })

    it('given 1 kg and 1000 grams when check for equality should return true', function () {
        assert.equal(weight.kgConverter(1), weight.gramsConverter(1000))
    })

    it('given 1 tonne and 1000 kg when check for equality should return true',function(){
        assert.equal(weight.tonneConverter(1),weight.kgConverter(1000))
    })

})