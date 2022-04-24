const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift amount is 0", () => {
    const input = "thinkful";
    const shift = 0;
    const actual = caesar(input, shift, (encode = true));

    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is less than -25", () => {
    const input = "thinkful";
    const shift = -26;
    const actual = caesar(input, shift, (encode = true));

    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is above 25", () => {
    const input = "thinkful";
    const shift = 29;
    const actual = caesar(input, shift, (encode = true));

    expect(actual).to.be.false;
  });

  it("should encode a message by shifting the letters", () => {
    const input = "thinkful";
    const shift = 3;
    const actual = caesar(input, shift, (encode = true));
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should encode a message by shifting the letters to the left", () => {
    const input = "thinkful";
    const shift = -3;
    const actual = caesar(input, shift, (encode = true));
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const input = "This is a secret message!";
    const shift = 8;
    const actual = caesar(input, shift);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const input = "This is a secret message!";
    const shift = 8;
    const actual = caesar(input, shift);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it("it should wrap around to the front of the alphabet if shift pass z", () => {
    const input = "zebra magazine";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "cheud pdjdclqh";
    expect(actual).to.equal(expected);
  });
  it("should decode a message by shifting the letters", () => {
    const input = "wklqnixo";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should decode a message by shifting the letters to the left", () => {
    const input = "qefkhcri";
    const shift = -3;
    const actual = caesar(input, shift, (encode = false));
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
});
