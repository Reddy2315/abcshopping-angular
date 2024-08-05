import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletecustomer',
  standalone: true,
  imports: [],
  templateUrl: './deletecustomer.component.html',
  styleUrl: './deletecustomer.component.css'
})
export class DeletecustomerComponent {

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const customerId = Number(params.get('cid'));
      if (confirm('Are you sure you want to delete this customer?')) {
        this.customerService.deleteCustomer(customerId).subscribe({
          next: () => {
            alert('Customer deleted successfully!');

          },
          error: () => {
            alert('Failed to delete customer.');

          }
        });
      } else {
        alert('customer deletion cancelled.');

      }
    });
  }
}
