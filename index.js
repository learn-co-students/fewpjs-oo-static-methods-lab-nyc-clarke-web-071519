class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(str) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let words = str.split(" ")
    for(let i = 0; i < words.length; i++) {
      if(i === 0) {result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))}
      else if(exceptions.includes(words[i])) {result.push(words[i])}
      else{result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))}
    }    
    return result.join(" ")
  }
}