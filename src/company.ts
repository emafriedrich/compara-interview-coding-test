export class InsuranceCompany {
  private _products: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this._products.push(product);
  }

  updatePrice() {
    this._products.forEach((p) => p.updatePrice());
  }

  get products() {
    return this._products;
  }
}

export abstract class Product {
  constructor(
    protected _name: string,
    protected _sellIn: number,
    protected _price: number
  ) {
    this._name = _name;
    this._sellIn = _sellIn;
    this._price = _price;
  }

  get price() {
    return this._price;
  }

  get name() {
    return this._name;
  }

  get sellIn() {
    return this._sellIn;
  }

  updatePrice() {
    this._sellIn--;
    this._updatePrice();
  }

  protected abstract _updatePrice(): void;

  abstract increment(): number;
}

export class NormalCoverage extends Product {
  constructor(protected _sellIn: number, protected _price: number) {
    super("NormalCoverage", _sellIn, _price);
  }

  protected _updatePrice() {
    const newPrice = this._price + this.increment();
    this._price = newPrice >= 0 ? newPrice : 0;
  }

  increment() {
    const _increment: number = this._sellIn < 0 ? -2 : -1;
    return _increment;
  }
}

export class FullCoverage extends Product {
  constructor(protected _sellIn: number, protected _price: number) {
    super("FullCoverage", _sellIn, _price);
  }

  protected _updatePrice() {
    const newPrice = this._price + this.increment();
    this._price = newPrice > 50 ? 50 : newPrice;
  }

  increment() {
    return this._sellIn > 0 ? 1 : 2;
  }
}

export class MegaCoverage extends Product {
  constructor(protected _sellIn: number, protected _price: number) {
    super("MegaCoverage", _sellIn, _price);
  }

  protected _updatePrice() {
    this._price = 80 + this.increment();
  }

  increment() {
    return 0;
  }
}

export class SpecialFullCoverage extends Product {
  constructor(protected _sellIn: number, protected _price: number) {
    super("SpecialFullCoverage", _sellIn, _price);
  }

  protected _updatePrice() {
    const _increment = this.increment();
    if (_increment === 0) {
      this._price = 0;
    } else {
      this._price = this._price + _increment;
    }
  }

  increment() {
    if (this._sellIn >= 10) {
      return 1;
    } else if (this._sellIn <= 10 && this._sellIn > 5) {
      return 2;
    } else if (this._sellIn >= 0) {
      return 3;
    } else {
      return 0;
    }
  }
}

export class SuperSale extends NormalCoverage {
  constructor(protected _sellIn: number, protected _price: number) {
    super(_sellIn, _price);
    this._name = "SuperSale";
  }

  protected _updatePrice() {
    const newPrice = this._price + this.increment();
    this._price = newPrice >= 0 ? newPrice : 0;
  }

  increment() {
    return super.increment() * 2;
  }
}
