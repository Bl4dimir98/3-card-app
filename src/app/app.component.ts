import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardAppComponent } from './components/card-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardAppComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = '3-card-app';
}
