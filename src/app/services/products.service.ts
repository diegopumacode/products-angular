import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IProduct {
  _id?: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://product-api-nest.herokuapp.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createProduct(product: IProduct){
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(product: IProduct,id:string) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
