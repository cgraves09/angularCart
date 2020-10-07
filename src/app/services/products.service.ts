import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Shirt',
      'New Slim Tee',
      25,
      'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540',
      1
    ),
    new Product(
      2,
      'Pants',
      'Skinny Jeans',
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
