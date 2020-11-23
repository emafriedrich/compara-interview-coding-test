import { InsuranceCompany, NormalCoverage, SuperSale } from "../src/company";

describe("Never negative", () => {
  let company: InsuranceCompany;
  const basePrice = 0;

  beforeAll(() => {
    company = new InsuranceCompany();
    const sellIn = 10;
    company.addProduct(new NormalCoverage(sellIn, basePrice));
    company.addProduct(new SuperSale(sellIn, basePrice));
  });
  it("Never negative", () => {
    company.updatePrice();
    company.updatePrice();
    company.updatePrice();
    company.products.forEach((p) => {
      expect(p.price).toBe(0);
    });
  });

  it("Test attributes", () => {
    expect(new NormalCoverage(1, 2).name).toBe("NormalCoverage");
    expect(new NormalCoverage(1, 2).sellIn).toBe(1);
  });
});
