import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/shared/model/pages';
import { Product } from './model/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  page!: Page<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onPageEvent(event: PageEvent){
    alert(event.pageIndex)
  }
  getProducts() {
     this.productService.getProducts()
     .subscribe(page => this.page = page);
  }

}
