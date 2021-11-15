import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  ngOnInit() {
    const run = async () => {
      console.log(performance);
      // @ts-ignore
      const result = await performance.measureUserAgentSpecificMemory();
      console.log(result);
    }
    run();
    window.addEventListener('myCustomEvent', (event) => {
      console.log(event);
    });
  }
}
