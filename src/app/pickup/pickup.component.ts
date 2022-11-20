import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickUpComponent implements OnInit {
  CustList:any;
  CustObject:any;
  tid:any;
  submitted = false;
    customerForm:FormGroup=new FormGroup({
      trackId:new FormControl({value:0,disabled:true}),
      custName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
      email:new FormControl("",[Validators.required,Validators.email]),
      mobile: new FormControl("",[Validators.required,Validators.pattern("[0-9].*")]),
      address: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
      courName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
      docket:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      fromCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      toCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      currentCity:new FormControl(),
      weight:new FormControl(),
      date:new FormControl(),
      status:new FormControl(),
    });

     SaveCustomer(){
      if (this.customerForm.invalid)
    {
      return;
    }
      console.log(this.customerForm.getRawValue());
      this.service.PostCustomerData(this.customerForm.getRawValue()).subscribe(result => {
        this.CustObject = result;
        this.submitted = true;
        //True if all the fields are filled
        if(this.submitted)
        {
          alert("Saved Successfully!!!");
        }
     });
  }
    constructor(private service:DetailService,private http:HttpClient,private route:ActivatedRoute) {
      this.service.GetCustomerData().subscribe(result=>{
        this.CustList=result;
    });
  }

     get custName(): FormControl{
      return this.customerForm.get("custName") as FormControl;
    }
    get email(): FormControl{
      return this.customerForm.get("email") as FormControl;
    }
    get mobile(): FormControl{
      return this.customerForm.get("mobile") as FormControl;
    }
    get address(): FormControl{
      return this.customerForm.get("address") as FormControl;
    }
    get courName(): FormControl{
      return this.customerForm.get("courName") as FormControl;
    }
    get docket(): FormControl{
      return this.customerForm.get("docket") as FormControl;
    }
    get fromCity(): FormControl{
      return this.customerForm.get("fromCity") as FormControl;
    }
    get toCity(): FormControl{
      return this.customerForm.get("toCity") as FormControl;
    }
    get currentCity(): FormControl{
      return this.customerForm.get("currentCity") as FormControl;
    }
    get weight(): FormControl{
      return this.customerForm.get("weight") as FormControl;
    }
    get date(): FormControl{
      return this.customerForm.get("date") as FormControl;
    }
courierformsubmitted(){
  console.log(this.customerForm.valid);
}

  ngOnInit(): void {}

}
