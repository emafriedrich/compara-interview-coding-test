import { MegaCoverage } from "../src/company";

describe("MegaCoverage plan", () => {
  let megaCoverage: MegaCoverage;
  const basePrice = 1241234; // does not matter

  beforeAll(() => {
    const sellIn = 2;
    megaCoverage = new MegaCoverage(sellIn, basePrice);
  });

  it("sellIn -4", () => {
    megaCoverage.updatePrice();
    megaCoverage.updatePrice();
    megaCoverage.updatePrice();
    megaCoverage.updatePrice();
    expect(megaCoverage.price).toBe(80);
  });
});
