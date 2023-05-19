import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminProductUpdateService } from './admin-product-update.service';
import { AdminProductUpdate } from './model/adminProductUpdate';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.scss']
})
export class AdminProductUpdateComponent implements OnInit {

  product!: AdminProductUpdate;
  productForm!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private adminProductUpdateService: AdminProductUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
      this.getProduct();

      this.productForm = this.formBuilder.group({
        name: [''],
        description: [''],
        category: [''],
        price: [''],
        currency: ['PLN'],
      });
  
  
      // this.productForm = this.formBuilder.group({
      //   name: ['', [Validators.required, Validators.minLength(4)]],
      //   description: ['', [Validators.required, Validators.minLength(4)]],
      //   fullDescription: [''],
      //   categoryId: ['', [Validators.required]],
      //   price: ['', [Validators.required, Validators.min(0)]],
      //   salePrice: ['', [Validators.min(0)]],
      //   currency: ['PLN', Validators.required],
      //   slug: ['', [Validators.required, Validators.minLength(4)]]
      // });
  
      // this.imageForm = this.formBuilder.group({
      //   file: ['']
      // })
    }

  getProduct() {
   let id = Number(this.router.snapshot.params["id"]);
   this.adminProductUpdateService.getProduct(id)
   .subscribe(product => this.productForm.setValue({
        name: product.name,
        description: product.description,
        fullDescription: product.fullDescription,
        categoryId: product.category,
        price: product.price,
        salePrice: product.salePrice,
        currency: product.currency,
   }));
  }

  submit() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminProductUpdateService.savePost(id, {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value,
      price: this.productForm.get('price')?.value,
      salePrice: this.productForm.get('salePrice')?.value,
      currency: this.productForm.get('currency')?.value,
    } as AdminProductUpdate).subscribe(product => {
      this.mapFormValues(product);
      this.snackBar.open("Product has been saved", '', {duration:3000});
  });
  }


  private mapFormValues(product: AdminProductUpdate): void {
    this.productForm.setValue({
      name: product.name,
      description: product.description,
      fullDescription: product.fullDescription,
      category: product.category,
      price: product.price,
      salePrice: product.salePrice,
      currency: product.currency,
    });
  }
}




