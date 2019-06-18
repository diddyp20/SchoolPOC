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

  console.log(this.userService.userSelected);
  }

  onSubmit(form:NgForm){
    console.log('user updated!');
    console.log(this.userService.userSelected);
    //update user
  }

}
