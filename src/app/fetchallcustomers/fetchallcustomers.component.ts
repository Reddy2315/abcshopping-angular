import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fetchallcustomers',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './fetchallcustomers.component.html',
  styleUrl: './fetchallcustomers.component.css'
})
export class FetchallcustomersComponent {

  customers:any

  constructor(private customerService : CustomerService){}

  ngOnInit(){
    console.log("inside Fetch Details")
    this.customerService.getAllCustomers().subscribe(data => this.customers=data);
  }
}
