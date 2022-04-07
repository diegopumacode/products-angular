import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: any = []

  loadingDelete = false;
  loadingProducts = false;

  constructor(private producsService: ProductsService, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.loadingProducts = true;
    this.producsService.getAllProducts().subscribe(data => {
      this.products = data;
      this.loadingProducts = false;
    });
  }

  public deleteProduct(id: string) {
    this.loadingDelete = true;
    this.producsService.deleteProduct(id).subscribe(data => {
      this.getProducts()
      this.loadingDelete = false;
      this.notification.create(
        'success',
        'Producto Eliminado con exito',
        'El producto se ha eliminado con exito'
      );
    });
  }

  public cancelDelete() { }

}
