import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  loading = false;
  productForm: FormGroup;

  // productForm = new FormGroup({
  //   name: ['', [Validators.required]],
  //   description: new FormControl(''),
  //   price: new FormControl(''),
  // })

  constructor(private router: Router, private notification: NzNotificationService, private producsService: ProductsService, private fb:FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
   }
  
  
  ngOnInit(): void { 
    
  }


  formatterDollar = (value: number): string => `S./ ${value}`;
  parserDollar = (value: string): string => value.replace('S./ ', '');

  submitForm() {
    if (this.productForm.valid) {
      this.loading = true;
      this.producsService.createProduct(this.productForm?.value).subscribe(data => {
        console.log(data)
        this.loading = true;
        this.notification.create(
          'success',
          'Producto Creado con exito',
          'El producto se ha creado con exito'
        );
        this.router.navigate(['/products'])
      });  
    }else{
      this.notification.create(
        'warning',
        '',
        'Por favor complete todos los campos'
      );
    }
    
  }

}
