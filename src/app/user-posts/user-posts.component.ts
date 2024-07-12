import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../types';
import { PostsService } from '../services/posts.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-posts.component.html',
})
export class UserPostsComponent implements OnInit {
  userId: number = 0;
  posts: Post[] = [];
  userPosts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id')) || 0;

    this.postsService
      .getPosts('https://jsonplaceholder.typicode.com/posts', {})
      .subscribe((posts) => {
        this.posts = posts;
        this.userPosts = this.posts.filter(
          (post) => post.userId === this.userId
        );
        console.log(this.userPosts);
      });
  }
}
