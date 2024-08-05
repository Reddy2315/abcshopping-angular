import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent {

  constructor(private customerService : CustomerService){}

  saveCustomer(addCustomerForm:any){
    console.log("Added Customer Details");
    console.log(addCustomerForm.value);
    this.customerService.addNewCustomer(addCustomerForm.value)
    .subscribe(()=>alert("Customer Details successfully added!..."));
  }
}
