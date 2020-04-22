class WeightConverter {

    kgConverter(weight) {
        return weight * 1000
    }

    gramsConverter(weight) {
        return weight
    }

}
module.exports = new WeightConverter();