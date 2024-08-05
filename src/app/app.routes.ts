import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchallproductsComponent } from './fetchallproducts/fetchallproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FetchproductComponent } from './fetchproduct/fetchproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/all', component: FetchallproductsComponent },
    { path: 'product/add', component: AddproductComponent },
    { path: 'product/get/:pid', component: FetchproductComponent },
    { path: 'product/edit/:pid', component: EditproductComponent },
    { path: 'product/delete/:pid', component: DeleteproductComponent}
];
