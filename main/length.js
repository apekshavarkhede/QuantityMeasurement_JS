class Length {

  // convert feet to inch
  feetConverter(length) {
    let result = length * 12
    return result
  }

  inchConverter(length) {
    return length;
  }

  // convert yard to inch
  yardConverter(length) {
    let result = length * 36;
    return result
  }

  // convert cm to inch
  cmConverter(length) {
    let result = Math.ceil((length) / (2.54))
    return result
  }

  // add lengths
  addLength(length1, length2) {
    let result = length1 + length2;
    return result
  }

}
module.exports = new Length();