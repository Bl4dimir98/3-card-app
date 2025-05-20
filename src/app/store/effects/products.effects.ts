import { Injectable } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { findAll, load } from "../products.actions";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";

@Injectable()
export class ProductsEffects {

    loadProduct$ = createEffect(
        () => this.acctions$.pipe(
            ofType(load),
            exhaustMap(() => this.productService.findAll())
        ).pipe(
            map(products => (findAll({ products }))),
            catchError(() => EMPTY)
        )
    );

    constructor(
        private acctions$: Actions,
        private productService: ProductService
    ) { }


}
