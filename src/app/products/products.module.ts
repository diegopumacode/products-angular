import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NgZorroModule } from '../ng-zorro.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
