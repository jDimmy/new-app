import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

imports: [
  FormsModule
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
}
