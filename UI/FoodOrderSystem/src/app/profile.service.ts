import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Profile } from './signup/signup.component';
import { Observable } from 'rxjs';
import {environment } from '../environments/environment';

@Injectable()
export class ProfileService {
  userUrl = "http://localhost:8080/api/users";
  constructor(private http: Http) {}

  registerUser(user:  Profile):Observable<number> {
    let userHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: userHeaders });
      return this.http.post(this.userUrl , user, options)
             .map(success => success.status);
  }
  private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status); 
    }
}
