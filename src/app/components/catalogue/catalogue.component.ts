import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'catalogue',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogue.component.html'
})
export class CatalogueComponent {

  @Input() products!: Product[];

  @Output() productEventEmmiter: EventEmitter<Product> = new EventEmitter();

  onAddCart(product: Product) {
    this.productEventEmmiter.emit(product);
  }


}
