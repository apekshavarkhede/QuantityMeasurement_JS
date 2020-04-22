class Quantity {

  feetConverter(length) {
    return length * 12;
  }

  inchConverter(length) {
    return length;
  }

  yardConverter(length) {
    return length * 36;
  }

  cmConverter(length) {
    return Math.ceil((length) / (2.54))
  }

}
module.exports = new Quantity();