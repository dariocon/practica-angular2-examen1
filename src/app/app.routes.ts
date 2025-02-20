import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ListComponent } from './users/list/list.component';
import { AddComponent } from './users/add/add.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'products', children: [
        { path: 'list', component: ListProductsComponent},
        { path: 'add', component: ProductsFormComponent},
        { path: 'edit/:id', component: ProductsFormComponent}
    ]},
    { path: 'users', children: [
        {path: 'list', component: ListComponent},
        {path: 'add', component: AddComponent}
    ]},
    {
        path: 'login', component: LoginComponent
    }

];
