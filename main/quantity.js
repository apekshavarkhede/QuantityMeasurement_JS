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

}
module.exports = new Quantity();