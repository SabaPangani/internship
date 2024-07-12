import { Component } from '@angular/core';
import { Post, User } from '../types';
import { PostsService } from '../services/posts.service';
import { TableComponent } from '../components/table/table.component';
import { PostsTableComponent } from '../components/posts-table/posts-table.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostsTableComponent],
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  posts: Post[] = [];
  users: User[] = [];

  constructor(
    private postService: PostsService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.postService
      .getPosts('https://jsonplaceholder.typicode.com/posts', {})
      .subscribe((posts) => {
        this.posts = posts;
      });
    this.usersService
      .getUsers('https://jsonplaceholder.typicode.com/users', {})
      .subscribe((users) => {
        this.users = users;
      });
  }
}
