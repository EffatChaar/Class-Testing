module.exports = val => {
    let result = [];
  
    for (let i = 0; i < val.length; ++i) {
      if (0 <= val[i]) {
        result[val[i]] = true;
      }
    }
  
    for (let i = 1; i <= result.length; ++i) {
      if (undefined === result[i]) {
        return i;
      }
    }
  
    return null
  }