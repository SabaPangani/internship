import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Post } from '../../types';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent {
  @Input() show = false;
  @Input() toggleModal = () => false;
  @Input() selectedPost!: Post;
}
