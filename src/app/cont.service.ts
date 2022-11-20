import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContService {

  constructor(private http:HttpClient) { }
  apiurl="https://localhost:44340/api/Contact";
  GetContactData()
  {
    return this.http.get(this.apiurl);
  }
  PostContactData(contactForm:any)
  {
    return this.http.post(this.apiurl,contactForm)
  }
}
