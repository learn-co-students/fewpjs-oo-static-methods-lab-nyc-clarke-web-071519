class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // static sanitize(string) {
  //   let newStr = ""
  //   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  //   for (var j = 0; j < string.length; j++){
  //     for (var i = 0; i < alphabet.length; i++){
  //       let letter = alphabet[i]
  //       let char = string[j]
        
  //       if (char === letter || char === "-" || char === "'" || char === " "){
  //         newStr += char
  //       }
  //     }
  //   }
  //   return newStr
  // }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let arrayOfWords = sentence.split(" ")
    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    return result.join(" ");
  }
}

