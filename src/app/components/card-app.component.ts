import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogueComponent } from "./catalogue/catalogue.component";

@Component({
  selector: 'card-app',
  standalone: true,
  imports: [CatalogueComponent],
  templateUrl: './card-app.component.html'
})
export class CardAppComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

}
