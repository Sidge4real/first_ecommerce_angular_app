import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

// a service is where data goes from component via a kind of meduim (= service) to provide other components the incoming data from the component that gaved this data

/* . . . */

// how the service provide (root vs any)
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  /* . . . */

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
