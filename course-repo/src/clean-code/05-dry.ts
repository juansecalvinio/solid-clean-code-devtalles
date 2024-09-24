type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public size: Size = "",
    public price: number = 0
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) throw Error(`${key} is empty`);
          break;
        case "number":
          if (this[key] <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not supported`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;
    return `${this.name} (${this.size}) - $${this.price}`;
  }
}

(() => {
  const bluePants = new Product("Blue Large Pants", "M", 40);
  console.log(bluePants.toString());
})();
