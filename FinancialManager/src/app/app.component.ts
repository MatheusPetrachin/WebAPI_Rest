import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Financial Manager';
  open: boolean = false;

  side() {
    if (this.open == false) {
      this.open = true;
    }
    else{
      this.open = false;
    }
  }
}
