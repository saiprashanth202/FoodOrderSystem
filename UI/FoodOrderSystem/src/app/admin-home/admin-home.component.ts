import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { ItemuploadService } from '../itemupload.service';

export class Items{
  constructor(public itemname:string,public price:string,public type:string,public file:File,public description:string){}

}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})




export class AdminHomeComponent implements OnInit {
  statusCode: number;
  requestProcessing = false; 
  profileIdToUpdate = null;
  processValidation = false;

itemForm=new FormGroup({itemname:new FormControl('',Validators.required),
price:new FormControl('',Validators.required),
description:new FormControl('',Validators.required),
file:new FormControl('',Validators.required),
type:new FormControl('',Validators.required)
})

constructor(private router:Router,private itemService:ItemuploadService) { }
logout(){
this.router.navigate(['home']);

}
selectedFiles: FileList
onitemFormSubmit(){
  let itemname = this.itemForm.get('itemname').value;
  let price=this.itemForm.get('price').value;
let type=this.itemForm.get('type').value;
let file=this.selectedFiles.item(0);
let description=this.itemForm.get('description').value;

let item=new Items(itemname,type,description,file,price);
alert(item);
console.log(item);


this.itemService.itemUpload(item).subscribe( successCode=>{
  this.statusCode=successCode
  if(this.statusCode==201)
  {
    this.router.navigate (['signup']); 
  
  }
},
errorCode => this.statusCode = errorCode)
  
}


fileEvent(event){
  this.selectedFiles=event.target.files;

}


  ngOnInit() {
  }


  

}
