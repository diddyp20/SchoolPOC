import { Component, OnInit, Input } from '@angular/core';

import { UserService } from 'src/shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css'],
  providers:[UserService]
})
export class TeacherHomeComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() newUser: User;

  ngOnInit() {
    this.userService.userSelected = this.newUser;
    console.log('teacher page');
  }

}
