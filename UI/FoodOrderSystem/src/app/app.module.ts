import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { BillmanagerComponent } from './billmanager/billmanager.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ItemsComponent } from './items/items.component';
import { ProfileService } from './profile.service';


const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'  
  },
  {
    path: 'home',    
    component:HomeComponent 
  },
  {
    path: 'admin',
    component :AdminHomeComponent
  },
  {
    path: 'login',
    component :LoginComponent
  },
  {
    path: 'signup',
    component :SignupComponent
  },
  {
    path: 'items',
    component :ItemsComponent
  }
  
  
  ]; 


@NgModule({
  declarations: [
    
 
    AppComponent,
    AdminHomeComponent,

    BillmanagerComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ItemsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
       

      }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
   
    ReactiveFormsModule,
    BrowserModule
  ],
  
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);