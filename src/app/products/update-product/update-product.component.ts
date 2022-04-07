import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  loading = false;
  productForm: FormGroup;
  id  = this.activatedRouted.snapshot.params['id'];
  loadingProduct = false;
  errorHandling = false
  
  constructor(private router: Router, private activatedRouted: ActivatedRoute, private notification: NzNotificationService, private producsService: ProductsService, private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getProduct(this.id)
  }

  getProduct(id: string) {
    this.loadingProduct = true;
    this.producsService.getProductById(id).subscribe((data: any) => {
      if (data.name == "CastError") {
        this.notification.create(
          'error',
          'Error',
          'Ha ocurrido un error al cargar el producto'
        );  
        this.errorHandling = true
      }else{
        this.productForm.patchValue({
          name: data[0].name,
          description: data[0].description,
          price: data[0].price
        })
      }
      this.loadingProduct = false;
    }, error => {
      this.loadingProduct = false;
      this.notification.create(
        'error',
        'Error',
        'Ha ocurrido un error al cargar el producto'
      );
    })
  }

  

  formatterDollar = (value: number): string => `S./ ${value}`;
  parserDollar = (value: string): string => value.replace('S./ ', '');

  submitForm() {
    if (this.productForm.valid) {
      this.loading = true;
      console.log(this.productForm.value)
      this.producsService.updateProduct(this.productForm?.value,this.id).subscribe(data => {
        console.log(data)
        this.loading = true;
        this.notification.create(
          'success',
          'Producto Creado con exito',
          'El producto se ha creado con exito'
        );
        this.router.navigate(['/products'])
      });
    } else {
      this.notification.create(
        'warning',
        '',
        'Por favor complete todos los campos'
      );
    }

  }
}
