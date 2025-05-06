import { createReducer } from "@ngrx/store"
import { CartItem } from "../models/cart-item"

export interface ItemsState {
    items: CartItem[],
    total: number
}


export const initialState: ItemsState = {
    items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
    total: 0,
}

export const itemsReducer = createReducer(
    initialState,
)