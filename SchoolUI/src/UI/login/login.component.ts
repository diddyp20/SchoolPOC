import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {UserService} from '../../shared/user.service';
import { User } from '../../shared/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) { }


  ngOnInit() {
    console.log('hello world');
    this.resetUser();
  }

  resetUser(form?: NgForm){
    console.log('hello world');
    if(!form){
      alert('form not passed!');
    }
    this.userService.userSelected = {
      _id: '',
      username: '',
      firstName: '',
      lastName: '',
      roleID: '',
      password: '',
      isAdmin: false
    };
  }
  onSubmit(form: NgForm) {
    console.log('Hello World!');
  }

  clikme(){
    console.log("this is a bullshit!");
  }

}
