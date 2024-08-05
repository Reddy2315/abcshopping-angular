import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteproduct',
  standalone: true,
  imports: [],
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('pid'));
      if (confirm('Are you sure you want to delete this product?')) {
        this.productService.deleteProduct(productId).subscribe({
          next: () => {
            alert('Product deleted successfully!');
            this.router.navigate(['product/all']); // Navigate to all products
          },
          error: () => {
            alert('Failed to delete product.');
            this.router.navigate(['product/all']); // Navigate to all products on error
          }
        });
      } else {
        alert('Product deletion cancelled.');
        this.router.navigate(['product/all']); // Navigate to all products if cancelled
      }
    });
  }
}
