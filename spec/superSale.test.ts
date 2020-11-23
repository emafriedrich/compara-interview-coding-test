import { SuperSale } from "../src/company";

describe("SuperSale plan", () => {
  let normalCoverage: SuperSale;
  const basePrice = 4;
  beforeAll(() => {
    const sellIn = 2;
    normalCoverage = new SuperSale(sellIn, basePrice);
  });
  it("Lower 1", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 2);
  });
  it("Lower 2", () => {
    normalCoverage.updatePrice();
    expect(normalCoverage.price).toBe(basePrice - 4);
  });
});
