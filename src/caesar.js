const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newalpha = "";
    try {
      // check if shift is in reured range
      if (!shift || shift === 0 || shift < -25 || shift > 25) {
        return false;
      }
      //make sure shift is positive
      shift = shift < 0 ? shift + 26 : shift;
      input = input.toLowerCase();
      for (let i = 0; i < input.length; i++) {
        //making sure we are working with only alphabet
        if (alphabet.includes(input[i])) {
          let index = alphabet.indexOf(input[i]);
          newalpha += !encode // check encode or decode
            ? alphabet.charAt((index - shift + 26) % 26) //decoding
            : alphabet.charAt((index + shift) % 26); // encoding
        } else {
          newalpha += input[i]; // adding none alphabet value inclunding space
        }
      }
      return newalpha;
    } catch (e) {
      return `An error occurred: ${e}`;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
