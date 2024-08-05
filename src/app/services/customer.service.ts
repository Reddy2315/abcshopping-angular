import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl:string="http://localhost:8081";

  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<Customer>{
    return this.http.get<Customer>(this.baseUrl+"/customer/");
  }
  
  getCustomerDetails(id:number):Observable<Customer>{
    return this.http.get<Customer>(this.baseUrl+"/customer/"+id);
  }

  addNewCustomer(customer:Customer):Observable<any>{
    const headers=new HttpHeaders();
    headers.set('content-type','application/json');
    return this.http.post(this.baseUrl+"/customer/",customer, {headers:headers});
  }


  updateCustomer(customer: Customer): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/customer/`, customer, { headers });
  }

  // updateCustomer(customer:Customer):Observable<any>{
  //   const headers=new HttpHeaders();
  //   headers.set('content-type','application/json');
  //   return this.http.put(this.baseUrl+"/customer/",customer,{headers:headers});

  // }

  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(this.baseUrl+"/customer/"+id)
  }
}
