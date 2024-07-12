import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}