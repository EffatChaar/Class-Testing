module.exports = str => {
    if (typeof str !== 'string' || !str || !str.length) return
    var count;
    for (var i = 0; i < str.length; i++) {
      var letter = str[i]
      var unique = true;
      for (var j = 0; j < str.length; j++) {
          if(letter === str[j] && i !== j) unique = false;
      }
      if (unique) return letter;
    } 
}