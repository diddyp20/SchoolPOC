import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  providers: [UserService]
})
export class AdminHomeComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() newUser: User;
  ngOnInit() {
    this.userService.userSelected = this.newUser;
    //this.isAdmin = this.newUser[0].isAdmin;
   // this.loginCount = this.newUser[0].loginCount;
    //console.log(this.userService.userSelected);
    //console.log(this.newUser);
  }

}
