import { Component, Input } from '@angular/core';
import { Post, User } from '../../types';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './table.component.html',
})
export class TableComponent {
 
}
