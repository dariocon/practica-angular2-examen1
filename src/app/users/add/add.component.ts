import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add.component.html'
})
export class AddComponent {
  
  roles = ['admin', 'manager', 'seller'];


  message: string = '';
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.myForm = this.fb.group({
      user: ['', [Validators.required], Validators.minLength(4)],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', [Validators.required]],
    });
  }

  notValid(field: string):boolean {
    return this.myForm.controls[field].invalid && this.myForm.controls[field].touched;
  }

}
