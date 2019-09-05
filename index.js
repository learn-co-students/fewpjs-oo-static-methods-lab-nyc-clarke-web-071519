class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let newArray = [];
    let array = string.split(' ');
    
    newArray.push(Formatter.capitalize(array.shift()));
    
    array.forEach(element => {
      if (!['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(element)) {
        element = Formatter.capitalize(element);
      }
      newArray.push(element);
    })
    let newString = newArray.join(' ');
    return newString;
  }
}