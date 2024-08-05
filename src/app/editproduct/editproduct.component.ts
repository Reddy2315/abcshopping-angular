import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {


  productForm: FormGroup;

  // productForm = new FormGroup({
  //   id: new FormControl(''),
  //   productName : new FormControl(''),
  //   productPrice : new FormControl(''),
  //   mfd: new FormControl(''),
  //   category : new FormControl('')
  // })

  constructor(private formbuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute) {
    this.productForm = this.formbuilder.group({
      id: [''],
      productName: [''],
      productPrice: [''],
      mfd: [''],
      category: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const productId: number = Number(param.get("pid"));
      this.productService.getProductDetails(productId).subscribe({
        next: data => this.productForm.setValue(data),
        error: err => console.log(err)
      });
    })
  }

  updateProduct() {
    console.log(this.productForm.value);
    this.productService.updateProduct(this.productForm.value).
      subscribe(() => alert("Product Deatils Updated Successfully!..."));
  }
}
