import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.component.html'
})
export class ListProductsComponent implements OnInit{

  private productsService: ProductsService = inject(ProductsService);
  
  products : Product[] = [];

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe({
      next: products => this.products = products,
      error: error => console.log('Error al obtener los productos')
    })
  }

  

}
