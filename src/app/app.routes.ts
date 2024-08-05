import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchallproductsComponent } from './fetchallproducts/fetchallproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FetchproductComponent } from './fetchproduct/fetchproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { FetchallcustomersComponent } from './fetchallcustomers/fetchallcustomers.component';
import { FetchcustomerComponent } from './fetchcustomer/fetchcustomer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/all', component: FetchallproductsComponent },
    { path: 'product/add', component: AddproductComponent },
    { path: 'product/get/:pid', component: FetchproductComponent },
    { path: 'product/edit/:pid', component: EditproductComponent },
    { path: 'product/delete/:pid', component: DeleteproductComponent},
    // Customer end points
    { path: 'customer/all', component: FetchallcustomersComponent },
    { path: 'customer/add', component: AddcustomerComponent },
    { path: 'customer/get/:cid', component: FetchcustomerComponent },
    { path: 'customer/edit/:cid', component: EditcustomerComponent },
    { path: 'customer/delete/:cid', component: DeletecustomerComponent}
];
