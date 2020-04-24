var assert = require('chai').assert;
var quantity = require('../main/length')

describe(`Testing for length Check`, function () {

    // check 0 feet and 0 feet
    it(`should return true if quantities are equal`, function () {
        assert.equal(quantity.feetConverter(0), quantity.feetConverter(0))
    })

    // check 1 feet and 0 feet
    it(`should return false if quantities are not equal`, function () {
        assert.notEqual(quantity.feetConverter(1), quantity.feetConverter(0))
    })

    //check 0 feet and null
    it(`given 0 Feet and null should return null `, function () {
        assert.isNull(null, quantity.feetConverter(0))
    })

    // check type 
    it(`given 0 Feet should return type as number `, function () {
        assert.typeOf(quantity.feetConverter(0), 'number')
    })

    // check 0 inch and 0 inch
    it(`given 0 inch and 0 inch when check for equality should return true`, function () {
        assert.equal(quantity.inchConverter(0), quantity.inchConverter(0))
    })

    // check 0 inch and 1 inch
    it(`given 0 inch and 1 inch when check for equality should return false`, function () {
        assert.notEqual(quantity.inchConverter(0), quantity.inchConverter(1))
    })

    // check 0 inch and null
    it(`given 0 inch and null when check for equality should return false`, function () {
        assert.isNull(quantity.inchConverter(null), quantity.inchConverter(0))
    })

    // check type 
    it(`given 0 Feet should return type as number `, function () {
        assert.equal('number', typeof (quantity.inchConverter(0)))
    })

    // check 1 feet and 1 inch
    it(`given 1 feet and 1 inch when check for equality should return false`, function () {
        assert.notEqual(quantity.feetConverter(1), quantity.inchConverter(1))
    })

    // check 1 feet and 1 inch 
    it(`given 1 feet and 1 inch when check for equality should return false`, function () {
        assert.notEqual(quantity.feetConverter(1), quantity.inchConverter(1))
    })

    // check 1 feet and 12 inches
    it(`given 1 Feet and 12 inches when check for equality should true`, function () {
        assert.equal(quantity.feetConverter(1), quantity.inchConverter(12))
    })

    // check 3 feet and 1 yard
    it(`given 3 Feet and 1 Yard when check for equality should return true`, function () {
        assert.equal(quantity.feetConverter(3), quantity.yardConverter(1))
    })

    // check 1 feet and 1 yard
    it('given 1 Feet and 1 Yard when check for equality should return false', function () {
        assert.notEqual(quantity.feetConverter(1), quantity.yardConverter(1))
    })

    // check 1 inch and 1 yard
    it(`given 1 Inch and 1 Yard when check for equality should return false`, function () {
        assert.notEqual(quantity.inchConverter(1), quantity.yardConverter(1))
    })

    // check 1 yard and 36 inch
    it(`given 1 Yard and 36 Inch when check for equality should return true`, function () {
        assert.equal(quantity.yardConverter(1), quantity.inchConverter(36))
    })

    // check 36 inches and 1 yard
    it(`given 36 Inches and 1 Yard when check for equality should return true`, function () {
        assert.equal(quantity.inchConverter(36), quantity.yardConverter(1))
    })

    // check 1 yard and 3 feet
    it(`given 1 Yard and 3 Feet when check for equality should return true`, function () {
        assert.equal(quantity.yardConverter(1), quantity.feetConverter(3))
    })

    // check 1 inch and 2.54
    it(`given 1 Inch  and 2.54 cm when check for equality should return true`, function () {
        assert.equal(quantity.inchConverter(1), quantity.cmConverter(2.54))
    })

    // check 2 inch and 5 cm
    it(`given 2 Inch  and 5 cm when check for equality should return true`, function () {
        assert.equal(quantity.inchConverter(2), quantity.cmConverter(5))
    })

    // add 2 inch and 2 inch
    it(`given 2 inch and 2 inch when add should return 4 inches`, function () {
        let resultOfAddition = quantity.addLength(quantity.inchConverter(2), quantity.inchConverter(2))
        assert.equal(4, resultOfAddition)
    })

    // add 1 feet and 2 inch
    it(`given 1 Feet and 2 inch when add should return 14 inches`, function () {
        let resultOfAddition = quantity.addLength(quantity.feetConverter(1), quantity.inchConverter(2))
        assert.equal(14, resultOfAddition)
    })

    // add 1 feet and 1 feet
    it(`given 1 Feet and 1 feet when add should return 24 inches`, function () {
        let resultOfAddition = quantity.addLength(quantity.feetConverter(1), quantity.feetConverter(1))
        assert.equal(24, resultOfAddition)
    })

    // add 2 inch and 2.5 cm
    it(`given 2 Inch and 2.5 cm when add should return 3 inches`, function () {
        let resultOfAddition = quantity.addLength(quantity.inchConverter(2), quantity.cmConverter(2.5))
        assert.equal(3, resultOfAddition)
    })

})