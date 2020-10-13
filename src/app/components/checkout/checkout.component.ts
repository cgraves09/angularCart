import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  productsList: Product[] = [];
  constructor(private productService: ProductService) {}
  total = 0;
  valid = true;
  success = false;
  ccInput: array = [];

  ranNum = Math.floor(Math.random() * 1000000000);
  ngOnInit(): void {
    this.productsList = this.productService.getProducts();
    this.productService.products.forEach((item) => {
      this.total += item.qty * item.price;
    });
    console.log(this.total);
  }
  handleChange(value) {
    let numArray = Array.from(String(value.value), Number);
    if (numArray.length === 16) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }

  payValid(month, year, item, cvc) {
    if (month.valid && year.valid && item && cvc) {
      this.success = true;
    }
  }
}
