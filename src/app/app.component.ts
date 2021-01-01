import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: dodgerblue;
    background-color: darkorange;
  }
  `]
})
export class AppComponent {
  title: 'angular-demo-app';
}
