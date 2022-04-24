// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode all letters to using there coordinates", () => {
    const input = "thinkful";
    const actual = polybius(input);
    const expected = "4432423352125413";

    expect(actual).to.equal(expected);
  });

  it("should leave space as it is while encoding", () => {
    const input = "hello world";
    const actual = polybius(input);
    const expected = "3251131343 2543241341";

    expect(actual).to.equal(expected);
  });

  it("should encode both 'i' and 'j' letters to 42", () => {
    const input = "microproject";
    const actual = polybius(input);
    const expected = "234231244353244342513144";

    expect(actual).to.equal(expected);
  });

  it("should decode a message ", () => {
    const input = "4432423352125413";
    const actual = polybius(input, false);
    const expected = "th(i/j)nkful";

    expect(actual).to.equal(expected);
  });

  it("should decode 42 to (i/j) ", () => {
    const input = "4432423352125413";
    const actual = polybius(input, false);

    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

  it("should leave spaces as is", () => {
    const input = "3251131343 2543241341";
    const actual = polybius(input, false);
    const expected = "hello world";

    expect(actual).to.equal(expected);
  });

  it("should return false if the length of all numbers is odd", () => {
    const input = "44324233521254134";
    const actual = polybius(input, false);

    expect(actual).to.be.false;
  });
});
