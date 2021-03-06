// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if substitution is empty", () => {
    const input = "thinkful";
    const actual = substitution(input);
    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const input = "message";
    const alphabet = "short";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet they are not  unique characters", () => {
    const input = "message";
    const alphabet = "abcabcabcabcabcabcabcabcab";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });

  it("should encode a message by using the given substitution alphabet", () => {
    const input = "message";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(input, alphabet);
    const expected = "ykrrpik";

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const input = "message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "ysii.rs";

    expect(actual).to.equal(expected);
  });

  it("should leave spaces as it is", () => {
    const input = "my message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "yp ysii.rs";

    expect(actual).to.equal(expected);
  });

  it("should decode a message by using the given substitution alphabet", () => {
    const input = "ykrrpik";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(input, alphabet, false);
    const expected = "message";

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const input = "ysii.rs";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, false);
    const expected = "message";

    expect(actual).to.equal(expected);
  });

  it("should leave spaces as it is", () => {
    const input = "yp ysii.rs";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, false);
    const expected = "my message";

    expect(actual).to.equal(expected);
  });
});
