class WeightConverter {

    kgConverter(weight) {
        return weight
    }

    // convert grams to kg
    gramsConverter(weight) {
        let result = weight / 1000
        return result
    }

    // convert tonne to grams
    tonneConverter(weight) {
        let result = weight * 100;
        return result
    }

    // add weights
    addWeights(weight1, weight2) {
        let result = weight1 + weight2
        return result
    }
}
module.exports = new WeightConverter();