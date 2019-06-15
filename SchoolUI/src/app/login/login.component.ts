import { Component, OnInit, Input } from '@angular/core';
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
  @Input() newUser : User[];
  loggedUser: boolean;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
     this.userService.userSelected = {
       _id :'',
      username: '',
      firstName: '',
      lastName: '',
      roleID: '',
      password: '',
      isAdmin: true,
      loginCount: 0

    };

   // this.userService.postEmployee( this.userService.userSelected)
     // .subscribe((response)=>{});

  }

  onSubmit(form:NgForm){
    this.userService.getEmployee(this.userService.userSelected)
      .subscribe((response: Array<any>)=>{
        if(response.filter(name => name.password == this.userService.userSelected.password )){
          this.loggedUser = true;
          this.userService.userSelected = response[0];
          this.newUser = response;
        }
      });
  }

}
