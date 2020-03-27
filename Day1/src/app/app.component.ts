import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day1';
  numberChild: number;

  getData(token: number) {
    this.numberChild = token;
  }
  
  setState(state: number) {
    this.numberChild = state;
  }
  ngOnInit() {

  }
}
