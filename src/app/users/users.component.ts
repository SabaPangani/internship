import { Component } from '@angular/core';
import { User } from '../types';
import { UsersService } from '../services/users.service';
import { UsersTableComponent } from "../components/users-table/users-table.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersTableComponent],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getUsers('https://jsonplaceholder.typicode.com/users', {})
      .subscribe((users) => {
        console.log(users);
        this.users = users;
      });
  }
}
