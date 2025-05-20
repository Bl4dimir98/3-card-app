import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { SharingDataService } from '../../services/sharing-data.service';
import { Store } from '@ngrx/store';
import { load } from '../../store/products.actions';

@Component({
  selector: 'catalogue',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogue.component.html'
})
export class CatalogueComponent implements OnInit {

  products!: Product[];

  constructor(
    private store: Store<{ products: any }>,
    private sharingDataService: SharingDataService) {
    this.store.select('products').subscribe(state => {
      this.products = state.products
    })
  }

  ngOnInit(): void {
    this.store.dispatch(load());
  }

  onAddCart(product: Product) {
    this.sharingDataService.productEventEmmiter.emit(product);
  }


}
