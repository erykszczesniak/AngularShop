import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/pages';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

   getProducts(): Observable<Page<Product>> {
    return this.http.get<Page<Product>>("http://localhost:8080/products");
  }
}
