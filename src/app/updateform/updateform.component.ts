import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl } from '@angular/forms';
import { DetailService } from '../detail.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  tid:any;
  CustObject:any;
  CustList:any;
  submitted = false;
  constructor(private service:DetailService,private http:HttpClient,private router:Router,private route:ActivatedRoute)
  {
    this.tid = this.route.snapshot.paramMap.get('trackId');
    if (this.tid != null && this.tid != 0) {
this.UpdateCustById(this.tid);
    }
  }
  UpdateCustById(trackId: any) {
    this.service.GetCustomerById(trackId).subscribe(result => {
      this.CustObject = result;
      if (this.CustObject != null)
       {
          this.customerForm =new FormGroup({
          trackId:new FormControl(this.CustObject.trackId),
          custName:new FormControl(this.CustObject.custName),
          email:new FormControl(this.CustObject.email),
          mobile: new FormControl(this.CustObject.mobile),
          address: new FormControl(this.CustObject.address),
          courName:new FormControl(this.CustObject.courName),
          docket: new FormControl(this.CustObject.docket),
          fromCity: new FormControl(this.CustObject.fromCity),
          toCity: new FormControl(this.CustObject.toCity),
          currentCity: new FormControl(this.CustObject.currentCity),
          weight: new FormControl(this.CustObject.weight),
          date: new FormControl(this.CustObject.date),
          status: new FormControl(this.CustObject.status)
        });
      }
    });
  }
  customerForm : FormGroup=new FormGroup({
    trackId:new FormControl({value:0,disable:true}),
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

  GetAll(){
    this.service.GetCustomerData().subscribe(result=>{
    this.CustList=result;
  });
  }

  SaveCustomer(){

    console.log(this.customerForm.getRawValue());

    this.service.PutCustomerData(this.customerForm.value).subscribe(result => {
      this.CustObject = result;
      if (this.customerForm.invalid)
    {
      return;
    }
    console.warn(this.customerForm.value);
    this.submitted = true;
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Updated Successfully!!!");
    }
   });
}
  ngOnInit(): void {
  }

}
