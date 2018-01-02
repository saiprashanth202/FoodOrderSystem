import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Items } from './admin-home/admin-home.component';
import { Observable } from 'rxjs';
import {environment } from '../environments/environment';

@Injectable()
export class ItemuploadService {
  userUrl = "http://localhost:8080/api/Items";
  constructor(private http: Http) {}

  itemUpload(item:  Items):Observable<number> {
    let userHeaders = new Headers({ 'Content-Type': 'application/json' });

      let options = new RequestOptions({ headers: userHeaders });
      return this.http.post(this.userUrl , item, options)
             .map(success => success.status);
          
  }
  private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status); 
    }
}


