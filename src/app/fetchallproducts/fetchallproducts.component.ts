import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-fetchallproducts',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './fetchallproducts.component.html',
  styleUrl: './fetchallproducts.component.css'
})
export class FetchallproductsComponent {

  products:any

  constructor(private productService : ProductService){

  }

  ngOnInit(){
    console.log("inside Fetch Details")
    this.productService.getAllProducts().subscribe(data => this.products=data);
  }
}
