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

  constructor(private userService: UserService) { }
  @Input() newUser: User;
  isUpdated: boolean;
  isAdmin: boolean;

  ngOnInit() {
    this.userService.userSelected = this.newUser;
    console.log('user profile ts');

  }

  onSubmit(form: NgForm) {
    console.log('user updated!');
    console.log(this.userService.userSelected);
    //update user -- set loginCOunt
    this.isAdmin = this.userService.userSelected.isAdmin;
    if (this.userService.userSelected.firstConnect) {
      this.userService.userSelected.firstConnect = false;
    }
    this.userService.updateEmployee(this.userService.userSelected)
      .subscribe(response => {
        console.log('user successfully updated');
        this.isUpdated = true;
      });

  }

}
