import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'card-app',
  standalone: true,
  imports: [CatalogueComponent, CartComponent],
  templateUrl: './card-app.component.html'
})
export class CardAppComponent implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

}
