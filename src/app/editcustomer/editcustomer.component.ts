import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/Customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editcustomer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private customerService: CustomerService, private route: ActivatedRoute) {
    this.customerForm = this.formbuilder.group({
      id: [''],
      customerName: [''],
      dob: [''],
      mobile: [''],
      email: [''],
      city: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const customerId: number = Number(param.get("cid"));
      this.customerService.getCustomerDetails(customerId).subscribe({
        next: data => this.customerForm.setValue(data),
        error: err => console.log(err)
      });
    });
  }

  updateCustomer() {
    console.log(this.customerForm.value);
    this.customerService.updateCustomer(this.customerForm.value)
      .subscribe(() => alert("Customer Details Updated Successfully!"));
  }
}
