var assert = require('chai').assert;
var weight = require('../main/weights')

describe('Testing for weight check', function () {

    // check 1 kg and 1000 grams
    it(`given 1 kg and 1000 grams when check for equality should return true`, function () {
        assert.equal(weight.kgConverter(1), weight.gramsConverter(1000))
    })

    // check 1 tonne and 1000 kg 
    it(`given 1 tonne and 1000 kg when check for equality should return true`, function () {
        assert.equal(weight.tonneConverter(1), weight.kgConverter(1000))
    })

    // add 1 kg and 1 kg
    it(`given 1 kg  and 1 kg when add should retur 2kg`, function () {
        let resultOfAddition = (weight.addWeights(weight.kgConverter(1), weight.kgConverter(1)))
        assert.equal(2, resultOfAddition)
    })

    // add 1 tonne and 1000 grams
    it(`given 1 tonne and 1000 grams when add should return 1001 kg `, function () {
        let resultOfAddition = weight.addWeights(weight.tonneConverter(1), weight.gramsConverter(1000))
        assert.equal(1001, resultOfAddition)
    })

})


