class Quantity {

  feetConverter(length) {
    return length * 12;
  }

  inchConverter(length) {
    return length;
  }

}
module.exports = new Quantity();