import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post, User } from '../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule],
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  @Input() users: User[] = [];
  @Input() posts: Post[] = [];

  searchQuery: string = '';

  get filteredUsers(): User[] {
    return this.users.filter((user) => {
      const searchTerm = this.searchQuery.toLowerCase();
      return (
        user.name.toLowerCase().includes(searchTerm) ||
        user.phone.toString().toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
      );
    });
  }
}
