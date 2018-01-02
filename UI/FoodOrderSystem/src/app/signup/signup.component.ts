import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
  import { ProfileService } from '../profile.service';
export class Profile{
  constructor(public username:string,public password:string,public cpassword:string,public location:string,public mobilenumber:string,public email:string){}
}


let passwordMatchValidator = function(fg: FormGroup) {
  return fg.get('password').value === fg.get('cpassword').value ? null : { 'mismatch': true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  statusCode: number;
  requestProcessing = false; 
  profileIdToUpdate = null;
  processValidation = false;
 

profileForm=new FormGroup({username:new FormControl('',Validators.compose([
  Validators.required,
  Validators.minLength(6)
])),
password:new FormControl('',Validators.required),
cpassword:new FormControl('',Validators.compose([
  Validators.required,
  Validators.minLength(6)
])),
location:new FormControl('',Validators.required),
mobilenumber:new FormControl('', Validators.compose([
  Validators.required,
  Validators.minLength(10),
  Validators.maxLength(10),
  Validators.pattern(/^\d{10}$/)
  
])),

email:new FormControl('', Validators.compose([
  Validators.required,
  Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
])),
}, passwordMatchValidator)
 constructor(private router:Router,private profileService:ProfileService) { }

 onprofileFormSubmit(){
 
let username=this.profileForm.get('username').value;
let password=this.profileForm.get('password').value;
let cpassword=this.profileForm.get('cpassword').value;
let location=this.profileForm.get('location').value;
let mobilenumber=this.profileForm.get('mobilenumber').value;


let email=this.profileForm.get('email').value;

let profile=new Profile(username,password,cpassword,location,mobilenumber,email);
console.log(profile);

this.profileService.registerUser(profile).subscribe(
 	
                   
    					  
  successCode=>{
    this.statusCode=successCode
    if(this.statusCode==201)
    {
      this.router.navigate (['signup']); 
     this.profileForm.reset();
    }
  },
  errorCode => this.statusCode = errorCode)
  this.profileForm.reset(); 


}

preProcessConfigurations() {
  this.statusCode = null;
this.requestProcessing = true;   
}


  ngOnInit() {
  }

}
