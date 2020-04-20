var assert = require('assert');
var quantity = require('../quantity')

describe('Testing for Quantity Check', function () {
    it('should return true if quantities are equal', function () {
        let quantityCheck = quantity.checkQuantity(0, 0);
        assert.equal(true, quantityCheck)
    })

})