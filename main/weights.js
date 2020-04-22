class WeightConverter {

    kgConverter(weight) {
        return weight
    }

    gramsConverter(weight) {
        return weight / 1000
    }

    tonneConverter(weight) {
        return weight * 1000
    }

    addWeights(weight1, weight2) {
        return weight1 + weight2
    }
}
module.exports = new WeightConverter();