function telephoneCheck(str) {
    let phoneVal = /^[1]?[ ]?([(]\d{3}[)]|\d{3})[- ]?\d{3}[- ]?\d{4}$/im;
      if (str.match(phoneVal))
      {
        return true;
      }
      else {
        return false
      }
  }
  
  telephoneCheck("555-555-5555");