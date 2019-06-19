import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSelected: User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  postEmployee(user: User) {
    alert(user.firstName +" succesfully saved!");
    console.log('before calling the API, the request is' + user.firstName);
    return this.http.post(this.baseURL + 'user', user);
  }
  getEmployee(user: User){
    return this.http.get(this.baseURL + 'username'+ `/${user.username}`);
  }
  updateEmployee(user:User){
    return this.http.put(this.baseURL + 'user' + `/${user._id}`, user);
  }

}
