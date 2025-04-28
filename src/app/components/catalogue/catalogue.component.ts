import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'catalogue',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogue.component.html'
})
export class CatalogueComponent {

  products!: Product[];

  productEventEmmiter: EventEmitter<Product> = new EventEmitter();

  constructor(private router: Router) {
    this.products = this.router.getCurrentNavigation()?.extras.state!['products'];
  }

  onAddCart(product: Product) {
    this.productEventEmmiter.emit(product);
  }


}
