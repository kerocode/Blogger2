import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class OauthService {
  BASEURL = "http://localhost:64397/api";

  constructor(private http: Http) { }

  register(user) {
    let bodyString = JSON.stringify(user); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    delete user.confirmPassword;
    return this.http.post(this.BASEURL + '/register', bodyString, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any;
  }
}

export interface User {
  FirstName: string;
  LastName: string;
  Password: string;
  Email: string;
}