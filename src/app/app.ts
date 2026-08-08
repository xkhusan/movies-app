import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./components/test/test.component";
import { Details } from "./components/details/details";

@Component({
  selector: 'app-root',
  imports: [TestComponent, Details],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies-app');
}
