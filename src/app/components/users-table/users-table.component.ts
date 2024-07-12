import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Post, User } from '../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  @Input() users: User[] = [];
  @Input() posts: Post[] = [];
}
