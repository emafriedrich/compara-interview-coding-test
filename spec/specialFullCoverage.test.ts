import { SpecialFullCoverage } from "../src/company";

describe("Normal coverage plan", () => {
  let normalCoverage: SpecialFullCoverage;
  const basePrice = 10;
  beforeAll(() => {
    const sellIn = 12;
    normalCoverage = new SpecialFullCoverage(sellIn, basePrice);
  });
  it("Lower 1", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice + 1);
  });
  it("Lower 2", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice + 2);
  });

  it("Lower 3", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice + 4);
  });

  it("Lower 8", () => {
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(10 + 16);
  });

  it("Lower 8", () => {
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(0);
  });
});
