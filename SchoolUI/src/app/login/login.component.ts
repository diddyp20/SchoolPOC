import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) { }
  newUser : User;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    console.log('this is a click event');
     this.userService.userSelected = {
       _id :'',
      username: '',
      firstName: '',
      lastName: '',
      roleID: '',
      password: '',
      isAdmin: true

    };

   // this.userService.postEmployee( this.userService.userSelected)
     // .subscribe((response)=>{});

  }

  onSubmit(form:NgForm){
    console.log('This is successfully signed in! ' + this.userService.userSelected.username +' and '+ this.userService.userSelected.password);
  }

}
