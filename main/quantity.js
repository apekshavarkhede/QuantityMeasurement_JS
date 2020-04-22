class Length {

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

  addLength(length1,length2){
    return length1+length2;
  }

}
module.exports = new Length();