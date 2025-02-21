import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http : HttpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000/products'

  private productSubject= new BehaviorSubject<Product[]>([]);

 /* getProducts(){
    return this.http.get<Product[]>(this.baseUrl, {withCredentials: true});
  }*/

    //Método original modificado para actualizar el subject.
    getProducts(): void {
      this.http.get<Product[]>(this.baseUrl, {withCredentials: true}).subscribe({
        next: products => this.productSubject.next(products),
        error: err => console.error(err)
      });

    }

  getProduct(id:string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`,  {withCredentials: true});
  }



  get products() {
    return this.productSubject.asObservable();
  }

  get productsValue() {
    return this.productSubject.value;
  }


  deleteProduct(id: string): void {
    this.http.delete<Product>(`${this.baseUrl}/${id}`, {withCredentials: true})
    .subscribe({
       next: product => this.productSubject.next(this.productSubject.getValue().filter(product=> product.id != id)) ,
      error: error => console.log(error)
    })
  }


}
