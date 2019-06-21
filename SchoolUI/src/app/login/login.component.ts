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
  incorrectPassword: boolean;
  isFirstConnexion: boolean;
  isAdmin: boolean;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
     this.userService.userSelected = {
       _id :'',
      username: '',
      firstName: '',
      lastName: '',
      role: '',
      password: '',
      isAdmin: null,
      loginCount: 0,
      dob: new Date(),
      city: '',
      classAssigned: '',
      email: '',
      emerName:'',
      emerPhone:'',
      pob:'',
      salary: 0,
      telephone:'',
      town:'',
      firstConnect: null
      // I love you Sylvie <3
    };
  }

  onSubmit(form:NgForm){
    this.userService.getEmployee(this.userService.userSelected)
      .subscribe((response: Array<any>)=>{
        var record = response.filter(rec => rec.password == this.userService.userSelected.password);
        if(record.length > 0){
          this.loggedUser = true;
          this.userService.userSelected = response[0];
          this.newUser = response;
          this.isFirstConnexion = this.userService.userSelected.firstConnect;
          this.isAdmin = this.userService.userSelected.isAdmin;
        }else{
          this.incorrectPassword = true;
          this.resetForm();
        }
      });
  }

}
