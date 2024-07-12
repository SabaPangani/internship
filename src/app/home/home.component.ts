import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, RouterOutlet],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {}
}
