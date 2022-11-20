import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { DetailService } from '../detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  CustObject:any;
  CustList:any;
  constructor(private service:DetailService,private http:HttpClient,private router:Router) { }
  customerForm=new FormGroup({
    trackId:new FormControl({value:0,disabled:true}),
    custName:new FormControl(),
    email:new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    courName:new FormControl(),
    docket: new FormControl(),
    fromCity: new FormControl(),
    toCity: new FormControl(),
    currentCity: new FormControl(),
    weight: new FormControl(),
    date: new FormControl(),
    status: new FormControl(),
  });
  GetAll(){this.service.GetCustomerData().subscribe(result=>{
    this.CustList=result;
  });
  }
  GetCustById(trackId:any){
    this.service.GetCustomerById(trackId).subscribe(result=>
      this.CustObject=result);
  }
  ngOnInit(): void {
  }

}
