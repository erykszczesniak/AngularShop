import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

   getProducts(): Product[] {
    return [
      {
        name: "Product 1",
        category: "Category 1",
        description: "First description",
        price: 11.99,
        currency: "PLN",
      },
      {
        name: "Product 2",
        category: "Category 2",
        description: "Second description",
        price: 12.99,
        currency: "PLN",
      },
      {
        name: "Product 3",
        category: "Category 3",
        description: "Third description",
        price: 13.99,
        currency: "PLN",
      }
    ];
  }
}
