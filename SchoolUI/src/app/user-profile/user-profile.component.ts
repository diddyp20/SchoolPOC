import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {

  constructor(private userService : UserService) { }
  @Input() newUser: User;

  ngOnInit() {
  this.userService.userSelected = this.newUser;

  }

  onSubmit(form:NgForm){
    console.log('user updated!');
    console.log(this.userService.userSelected);
    //update user -- set loginCOunt
    this.userService.userSelected.loginCount += 1;
    this.userService.updateEmployee(this.userService.userSelected)
      .subscribe(response =>{
        console.log('user successfully updated');
      });
    
  }

}
