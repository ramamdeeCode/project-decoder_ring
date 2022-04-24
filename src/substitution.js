// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, newalpha, encode = true) {
    // your solution code here
    if (newalpha === undefined || newalpha.length !== 26) return false;
    let temp = "";
    for (let char of newalpha) {
      if (temp.includes(char)) return false;
      temp += char;
    }
    let result = "";

    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        result += " ";
      } else {
        if (!encode) {
          let index = newalpha.indexOf(input[i]);
          result += alphabet[index];
        } else {
          let index = alphabet.indexOf(input[i]);
          result += newalpha[index];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
