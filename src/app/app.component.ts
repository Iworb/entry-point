import { Component } from '@angular/core';

import { ExampleCoreService } from 'example-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entry-points-src';

  constructor(private ecs: ExampleCoreService) {}
}
