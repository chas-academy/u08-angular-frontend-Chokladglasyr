import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
