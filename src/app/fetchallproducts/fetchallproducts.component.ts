import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-fetchallproducts',
  standalone: true,
  imports: [CommonModule,RouterLink,MatTableModule,MatButtonModule,MatIconModule],
  templateUrl: './fetchallproducts.component.html',
  styleUrl: './fetchallproducts.component.css'
})
export class FetchallproductsComponent {

  products:any

  displayedColumns: string[] = ['id', 'productName', 'productPrice','view','edit','delete'];

  constructor(private productService : ProductService){

  }

  ngOnInit(){
    console.log("inside Fetch Details")
    this.productService.getAllProducts().subscribe(data => this.products=data);
  }
}
