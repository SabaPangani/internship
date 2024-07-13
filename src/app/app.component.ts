import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
