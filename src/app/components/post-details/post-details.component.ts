import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent {
  @Input() show = false;
  @Input() customClass = '';
  @Input() closeCallback = () => false;

  constructor() {}

  ngOnInit() {}
}
