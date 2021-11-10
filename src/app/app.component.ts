import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MainComponent implements OnInit {
  title = 'dashboard';

  ngOnInit() {
    window.addEventListener('myCustomEvent', (event) => {
      console.log(event);
    });
  }
}
