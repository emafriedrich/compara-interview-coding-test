import {
  FullCoverage,
  InsuranceCompany,
  MegaCoverage,
  NormalCoverage,
  Product,
  SpecialFullCoverage,
  SuperSale,
} from "./company";

const company = new InsuranceCompany();

company.addProduct(new NormalCoverage(10, 20));
company.addProduct(new SuperSale(10, 20));
company.addProduct(new SpecialFullCoverage(20, 20));
company.addProduct(new MegaCoverage(10, 20));
company.addProduct(new FullCoverage(10, 20));

const productPrinter = (product: Product) => {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`-------- Day ${i} --------`);
  company.updatePrice();
  console.log("name, sellIn, price");
  company.products.forEach((p) => productPrinter(p));
  console.log("");
}
