import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Post, User } from '../../types';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-posts-table',
  standalone: true,
  imports: [CommonModule, PostDetailsComponent],
  templateUrl: './posts-table.component.html',
})
export class PostsTableComponent {
  @Input() users: User[] = [];
  @Input() posts: Post[] = [];
  selectedPost!: Post;
  showModal = false;

  onToggleModal = (): any => {
    this.showModal = !this.showModal;
  };

  getPostId(postId: number) {
    this.selectedPost = this.posts.find((post) => post.id === postId)!;
    this.onToggleModal();
  }

  getUsername(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown User';
  }
}
