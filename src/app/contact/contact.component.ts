import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContService } from '../cont.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contobject:any;
  ContactList:any;

  contactForm:FormGroup = new  FormGroup({
    contId:new FormControl({value:0,disabled:true}),
    name:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobileNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    message:new FormControl('',Validators.required),
  });
  SaveContact(){
    console.log(this.contactForm.getRawValue());
    this.service.PostContactData(this.contactForm.getRawValue()).subscribe(result => {
    this.contobject = result;
   });
  }

  constructor(private service:ContService) {
    this.service.GetContactData().subscribe(result=>{
    this.ContactList=result;
    });
   }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid)
    {
      return;
    }
    console.warn(this.contactForm.value);
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Thank You For Contacting US!!!");
    }
  }
  get name(): FormControl{
    return this.contactForm.get("name") as FormControl;
  }
  get email(): FormControl{
    return this.contactForm.get("email") as FormControl;
  }
  get phone(): FormControl{
    return this.contactForm.get("phone") as FormControl;
  }
  get message(): FormControl{
    return this.contactForm.get("message") as FormControl;
  }
  ngOnInit(): void {
  }

}
