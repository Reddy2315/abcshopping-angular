import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  constructor(private productService : ProductService){}

  saveProduct(addProductForm:any){
    console.log("Added Product Details");
    console.log(addProductForm.value);
    this.productService.addNewProduct(addProductForm.value)
    .subscribe(()=>alert("Product successfully added!..."));
  }
}
