import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Observable, Subject,tap,of, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http:HttpClient) { }
  GetCustomerData(){
    return this.http.get<any>('https://localhost:44340/api/Details/GetDetails');
  }
  GetCustomerById(trackId:any){
    return this.http.get('https://localhost:44340/api/Details'+"/"+trackId);
  }
  PostCustomerData(customerForm:any){
    return this.http.post("https://localhost:44340/api/Details",customerForm);
  }
  PutCustomerData(customerForm:any){
    return this.http.put('https://localhost:44340/api/Details',customerForm);
  }
  DeleteCustomerData(trackId:any){
    return this.http.delete('https://localhost:44340/api/Details'+"/"+trackId);
  }
}
