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
  isCreateUser: boolean;
  role: any[] = ["Director", "Teacher", "Secretary", "Housekeeper", "Admin"];
  ngOnInit() {
    this.userService.userSelected = this.newUser;
    console.log('this is the admin data');
    this.isCreateUser = true;
    //this.isAdmin = this.newUser[0].isAdmin;
   // this.loginCount = this.newUser[0].loginCount;
    //console.log(this.newUser);
  }

}
