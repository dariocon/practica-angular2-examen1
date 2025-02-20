import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [],
  templateUrl: './add.component.html'
})
export class AddComponent {
  
  roles = ['admin', 'manager', 'seller'];

}
