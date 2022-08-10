String.prototype.toAlternatingCase = function () {
    // Define your method here :
    const reg = /[A-Z]/;
    let result = '';
    
    for(let i = 0; i < this.length; i += 1) {
      if(reg.test(this[i])) {
        result += this[i].toLowerCase();
      } else {
        result += this[i].toUpperCase();
      }
    }
    
    return result
  }



  String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};


String.prototype.toAlternatingCase = function(){
    return this.split("").map(letter => {
      var newLetter = letter.toUpperCase();
      return letter == newLetter ? letter.toLowerCase() : newLetter;
    }).join("");
  }