import { SpecialFullCoverage } from "../src/company";

describe("Normal coverage plan", () => {
  let normalCoverage: SpecialFullCoverage;
  const basePrice = 10;

  beforeAll(() => {
    const sellIn = 12;
    normalCoverage = new SpecialFullCoverage(sellIn, basePrice);
  });

  it("sellIn -1", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice + 1);
  });

  it("sellIn -2", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice + 2);
  });

  it("sellIn -3", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice + 4);
  });

  it("sellIn -8", () => {
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(10 + 16);
  });

  it("negative sellIn", () => {
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
