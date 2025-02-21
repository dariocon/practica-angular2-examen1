import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.component.html'
})
export class ListProductsComponent implements OnInit{

  private productsService: ProductsService = inject(ProductsService);
  private authService: AuthService= inject(AuthService);
  productsa : Product[] = [];
  products : Product[] = [];
  user: any | null = null;

  ngOnInit(): void {
    this.authService.currentUser.subscribe((response) => {
      this.user = response;
    });
    this.fetchProducts()
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id);
  }

  fetchProducts(): void {
    this.productsService.products.subscribe({
      next: (productsResponse) => {
        this.products=productsResponse;
        this.productsa=[...this.products];

      },
      error: (err)=>{
        console.log('errror al cargar los productos', err)
      }
    })
    this.productsService.getProducts();
  }

  


}
