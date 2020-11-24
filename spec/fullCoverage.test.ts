import { FullCoverage } from "../src/company";

describe("FullCoverage plan", () => {
  let fullCoverage: FullCoverage;
  const basePrice = 48;

  beforeAll(() => {
    const sellIn = 2;
    fullCoverage = new FullCoverage(sellIn, basePrice);
  });

  it("sellIn -1", () => {
    fullCoverage.updatePrice();
    expect(fullCoverage.price).toBe(basePrice + 1);
  });

  it("sellIn -2", () => {
    fullCoverage.updatePrice();
    expect(fullCoverage.price).toBe(basePrice + 2);
  });

  it("sellIn -3", () => {
    fullCoverage.updatePrice();
    expect(fullCoverage.price).toBe(50);
  });

  it("sellIn -6", () => {
    fullCoverage.updatePrice();
    fullCoverage.updatePrice();
    fullCoverage.updatePrice();
    expect(fullCoverage.price).toBe(50);
  });
});
