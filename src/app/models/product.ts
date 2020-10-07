export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  qty: number;

  constructor(id, name, description, price, imgUrl, qty) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
    this.qty = qty;
  }
}
