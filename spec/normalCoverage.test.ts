import { NormalCoverage } from "../src/company";

describe("NormalCoverage plan", () => {
  let normalCoverage: NormalCoverage;
  const basePrice = 10;
  beforeAll(() => {
    const sellIn = 2;
    normalCoverage = new NormalCoverage(sellIn, basePrice);
  });
  it("Lower 1", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 1);
  });
  it("Lower 2", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 2);
  });

  it("Lower 4", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 4);
  });
});
