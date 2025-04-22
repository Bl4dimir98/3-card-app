import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogueComponent, CartComponent],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

  onAddCart(product: Product) {
    this.items = [... this.items, { product: { ...product }, quantity: 1 }];
  }

}
