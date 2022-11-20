import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl } from '@angular/forms';
import { DetailService } from '../detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  CustObject:any;
  CustList:any;
  constructor(private service:DetailService,private http:HttpClient,private router:Router,private route:ActivatedRoute,private ser:AdminService)
  {
    // this.GetAll();
  }
  customerForm : FormGroup=new FormGroup({
    trackId:new FormControl(),
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
  DeleteCustById(trackId:any){
    if(confirm("Do you want to delete!")){
    this.service.DeleteCustomerData(trackId).subscribe(result=>{
      // this.CustObject=result;
      this.GetAll();
   });
   }
  }

  ngOnInit(): void {
  }

  logOut(){
    this.ser.removeToken();
    this.router.navigateByUrl('/login');
  }

}
