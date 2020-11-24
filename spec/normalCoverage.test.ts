import { NormalCoverage } from "../src/company";

describe("NormalCoverage plan", () => {
  let normalCoverage: NormalCoverage;
  const basePrice = 10;

  beforeAll(() => {
    const sellIn = 2;
    normalCoverage = new NormalCoverage(sellIn, basePrice);
  });

  it("sellIn -1", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 1);
  });

  it("sellIn -2", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 2);
  });

  it("sellIn -3", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 4);
  });
});
