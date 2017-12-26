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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


profileForm=new FormGroup({username:new FormControl('',Validators.required),
password:new FormControl('',Validators.required),
cpassword:new FormControl('',Validators.required),
location:new FormControl('',Validators.required),
mobilenumber:new FormControl('',Validators.required),

email:new FormControl('',Validators.required)
})
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

this.profileService.registerUser(profile).subscribe(profile => {
 	
                   
    					  
})
       


}

  ngOnInit() {
  }

}
