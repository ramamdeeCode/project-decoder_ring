// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function gridAlphabet() {
    let square = [
      ["0", "1", "2", "3", "4", "5"],
      ["1", "a", "b", "c", "d", "e"],
      ["2", "f", "g", "h", "(i/j)", "k"],
      ["3", "l", "m", "n", "o", "p"],
      ["4", "q", "r", "s", "t", "u"],
      ["5", "v", "w", "x", "y", "z"],
    ];

    let compareChar = {};
    //setting up the alphabet with there cordinate in an objects
    for (let i = 0; i < square.length; i++) {
      let innerArrayLength = square[i].length;
      for (let j = 0; j < innerArrayLength; j++) {
        //removing spaces
        if (square[i][j].toLowerCase() != square[i][j].toUpperCase()) {
          let temp = "";
          temp += i;
          temp += j;
          //adding only alphabet character into an objects
          compareChar[square[j][i]] = temp;
        }
      }
    }
    return compareChar;
  }

  let compareChar = gridAlphabet();

  function polybiusEncrypt(input) {
    try {
      let encryptInput = "";
      for (let i = 0; i < input.length; i++) {
        encryptInput +=
          input[i] === " "
            ? " "
            : //setting 42 for eather i or j
            input[i] === "i" || input[i] === "j"
            ? "42"
            : compareChar[input[i]];
      }
      return encryptInput;
    } catch (e) {
      return e;
    }
  }

  function polybiusDecrypt(input) {
    try {
      input = input.toLowerCase();
      // removing space and check if length is even
      if (input.split(" ").join("").length % 2 !== 0) return false;

      let temp = "";
      let decryptInput = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          decryptInput += " ";
        } else {
          temp += input[i];
          if (temp.length === 2) {
            //find the match key in the object
            decryptInput += Object.keys(compareChar).find(
              (key) => compareChar[key] === temp
            );
            temp = "";
          }
        }
      }
      return decryptInput;
    } catch (e) {
      return e;
    }
  }

  function polybius(input, encode = true) {
    // your solution code here
    return encode ? polybiusEncrypt(input) : polybiusDecrypt(input);
  }

  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
