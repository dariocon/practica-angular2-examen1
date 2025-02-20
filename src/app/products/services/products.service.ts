import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http : HttpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000/products'


  getProducts(){
    return this.http.get<Product[]>(this.baseUrl)

  }

}
