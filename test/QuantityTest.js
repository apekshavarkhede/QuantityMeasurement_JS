var assert = require('chai').assert;
var quantity = require('../quantity')

describe('Testing for Quantity Check', function () {
    it('should return true if quantities are equal', function () {
        let quantityCheck = quantity.checkQuantity(0, 0);
        assert.equal(true, quantityCheck)
    })

    it('should return false if quantities are not equal', function () {
        let quantityCheck = quantity.checkQuantity(1, 0);
        assert.notEqual(true, quantityCheck)
    })

    it('given 0 Feet and null should return null ', function () {
        assert.isNull(null, quantity.checkQuantity(0, null))
    })
})