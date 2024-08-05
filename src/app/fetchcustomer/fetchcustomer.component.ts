import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetchcustomer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fetchcustomer.component.html',
  styleUrl: './fetchcustomer.component.css'
})
export class FetchcustomerComponent {

  selectedCustomer:any;
  constructor(private customerService: CustomerService,private route:ActivatedRoute){}
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      let productId:number=Number(params.get("cid"));
      this.customerService.getCustomerDetails(productId).subscribe({
        next:data=>this.selectedCustomer=data,
        error:err=>console.log(err)
      });
    })
  }
}
