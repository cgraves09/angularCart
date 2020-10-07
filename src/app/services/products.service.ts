import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      "Gildan Men's Crew T-Shirt",
      "Gildan crew t-shirts are the ultimate in comfort. Cool Spire moisture wicking keep you cool and dry while the soft touch yarn and tag-free neck feels great all day long. These tees are built to last with durable tubular collar design and covered shoulder seams. The Gildan t-shirt will soon be your favorite. if it isn't already.",
      25,
      'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540',
      1
    ),
    new Product(
      2,
      "Men's 511 Slim Fit Jeans",
      "A modern slim with room to move, the 511™ Slim Fit Stretch Jeans are a classic since right now. These jeans sit below the waist with a slim fit from hip to ankle. Made with +Levi's® Flex: Our most advanced stretch technology engineered to deliver maximum flex and optimum comfort. Cut close to the body, the 511™ Slim is a great alternative to the skinny jeans.",
      30,
      'https://i1.wp.com/thejeansblog.com/wp-content/uploads/2015/12/dr-denim-dixy-extreme-skinny-jeans.jpg',
      1
    ),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
