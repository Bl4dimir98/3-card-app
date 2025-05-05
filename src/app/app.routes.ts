import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

export const routes: Routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
    { path: 'catalog', component: CatalogueComponent }


];
