import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = false;
  products: any = [];

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  })

  constructor(private producsService: ProductsService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.producsService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  submitForm() {
    this.producsService.createProduct(this.productForm.value).subscribe(data => {
      this.getProducts()
      this.isVisible = false;
    });
  }



  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
