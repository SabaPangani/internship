import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post, User } from '../../types';
import { PostDetailsComponent } from "../post-details/post-details.component";

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [NgFor, PostDetailsComponent],
  templateUrl: './posts-table.component.html',
})
export class PostsTableComponent {
  @Input() users: User[] = [];
  @Input() posts: Post[] = [];
  // @Output() loadMore = new EventEmitter<void>();
  showModal = false;

  toggleModal = () => {
    this.showModal = !this.showModal;
  };
  getUsername(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown User';
  }

  // onLoadMore() {
  //   this.loadMore.emit();
  // }
}
