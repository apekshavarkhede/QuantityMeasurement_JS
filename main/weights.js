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
}
module.exports = new WeightConverter();