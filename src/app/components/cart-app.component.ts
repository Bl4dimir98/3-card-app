import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartItem } from '../models/cart-item';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';
@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit {

  items: CartItem[] = [];

  total: number = 0;

  constructor(
    private router: Router,
    private sharingDataService: SharingDataService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.onDeleteCart();
    this.onAddCart();
  }

  onAddCart(): void {
    this.sharingDataService.productEventEmmiter.subscribe(product => {
      const hasItem = this.items.find(item => item.product.id === product.id);
      if (hasItem) {
        this.items = this.items.map(item => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item;
        })
      } else {
        this.items = [... this.items, { product: { ...product }, quantity: 1 }];
      }

      this.calculateTotal();
      this.saveSession();
      this.router.navigate(['/cart'], { state: { items: this.items, total: this.total } })
    });
  }

  onDeleteCart(): void {
    this.sharingDataService.idProductEventEmmiter.subscribe(id => {
      console.log(id + ' se ha ejecutado el evento idProductEventEmmiter');
      this.items = this.items.filter(item => item.product.id !== id);
      if (this.items.length == 0) {
        sessionStorage.removeItem('cart');
        sessionStorage.clear();
      }
      this.calculateTotal();
      this.saveSession();

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cart'], { state: { items: this.items, total: this.total } });
      });
    });
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acum, item) => acum + item.quantity * item.product.price, 0);
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

}
