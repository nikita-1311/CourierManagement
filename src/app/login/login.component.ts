import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  constructor(private formBuilder: FormBuilder,private service:AdminService,private router:Router){}
  ngOnInit(): void {}
  loginForm:FormGroup = new  FormGroup
  ({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  isAdminValid:boolean=false;
  LoginSubmit()
  {
  this.service.loginadmin([this.loginForm.value.userName,this.loginForm.value.password]).subscribe(result=>{
    if(result=='Failure')
    {
      this.isAdminValid=false;
      alert("Login Unsuccessful");

    }
    else
    {
      this.isAdminValid=true;
      this.service.setToken(result);
      this.router.navigateByUrl('/dashboard');
    }
  });
  }

  get userName():FormControl
  {
    return this.loginForm.get('userName') as FormControl;
  }
  get password():FormControl
  {
    return this.loginForm.get('password') as FormControl;
  }
}
