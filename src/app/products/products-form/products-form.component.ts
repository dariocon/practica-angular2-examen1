import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],  
  templateUrl: './products-form.component.html'
})
export class ProductsFormComponent {

  @Input() id!: string; 
  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private productService: ProductsService
  ) {}
 /* ngOnInit(): void {
    this.editForm = this.fb.group({

    });
    
    this.productService.getProduct(this.id).subscribe({
      next: (product) => {
        this.editForm.patchValue(product); 
      },
      error: (error) => console.error('Error', error),
    });
  

  }*/
}
