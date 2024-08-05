import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  constructor(private productService : ProductService){}

  saveProduct(addProductForm:any){
    console.log("Added Product Details");
    this.productService.addNewProduct(addProductForm.value)
    .subscribe(()=>alert("Product successfully added!..."));
  }
}
