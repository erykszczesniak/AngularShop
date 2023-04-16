import { AdminProductService } from './admin-product.service';
import { AdminProduct } from './adminProduct';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { startWith, switchMap } from 'rxjs';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  data: AdminProduct[] = [];
  totalElements: number = 0;
  displayedColumns: string[] = ["id", "name", "price"];

  constructor(private adminProductService: AdminProductService) {}


  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize);
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.data = data.content;
    });
  }
}
