describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    expect(true).toBeTruthy(); //This should be true
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(1 + 1).toEqual(2);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should assert equality with ===", function () {
    var expectedValue = 2;
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(1 + 1).toBe(2);
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(1 + 1).toEqual(2);
  });
});