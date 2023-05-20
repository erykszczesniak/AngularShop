import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template:  `
    <div [formGroup]="parentForm" fxLayout="column">
      <mat-form-field appearance="fill">
    <mat-label>Name</mat-label>
    <input
      matInput
      placeholder="Give a name of product"
      formControlName="name"
    />
  </mat-form-field>

  <mat-form-field appearance="fill">
    <mat-label>Description</mat-label>
    <textarea
      matInput
      rows="20"
      placeholder="Give a description of product"
      formControlName="description"
    ></textarea>
  </mat-form-field>

  <mat-form-field appearance="fill">
    <mat-label>Category</mat-label>
    <input
      matInput
      placeholder="Give a category of product"
      formControlName="category"
    />
  </mat-form-field>

  <mat-form-field appearance="fill">
    <mat-label>Price</mat-label>
    <input
      matInput
      placeholder="Give a price of product"
      formControlName="price"
    />
  </mat-form-field>

  <mat-form-field appearance="fill">
    <mat-label>Currency</mat-label>
    <input
      matInput
      placeholder="Give a currency of product"
      value="PLN"
      formControlName="currency"
    />
  </mat-form-field>

  <div fxLayout="colum" fxFlexAlign="end" fxLayoutGap="10">
    <button mat-flat-button color="primary">Save</button>
  </div>
  </div>`,
})
export class AdminProductFormComponent implements OnInit{

    @Input() parentForm!: FormGroup

    ngOnInit(): void {
        
    }

} 