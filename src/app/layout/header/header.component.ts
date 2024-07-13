import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent, CommonModule, RouterLink],
  providers: [DatePipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentDate: string;

  constructor(private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(new Date(), 'short')!;
  }
}
