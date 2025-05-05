import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  private _productEventEmmiter: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  get productEventEmmiter(): EventEmitter<Product> {
    return this._productEventEmmiter;
  }

  get idProductEventEmmiter(): EventEmitter<number> {
    return this._idProductEventEmitter;
  }

}
