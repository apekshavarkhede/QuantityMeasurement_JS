var assert = require('chai').assert;
var quantity = require('../quantity')

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




})