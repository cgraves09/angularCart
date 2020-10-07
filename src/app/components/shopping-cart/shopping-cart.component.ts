import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../services/products.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  productsList: Product[] = [];
  total = 0;
  qty = 0;
  added = true;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productsList = this.productService.getProducts();
    this.calculateTotal();
  }
  handleChange(value, product) {
    product.qty = value.value;
    if (product.qty === 0) {
      this.deleteItem(product);
    }
    this.calculateTotal();
  }
  deleteItem(product) {
    let index = this.productsList.indexOf(product);
    this.productsList.splice(index, 1);
    this.calculateTotal();
  }
  calculateTotal() {
    this.total = 0;
    this.qty = 0;
    this.productsList.forEach((item) => {
      let qtyTotal = Number(item.qty);
      console.log(qtyTotal);
      this.qty += qtyTotal;
      this.total += item.qty * item.price;
    });
  }
}
