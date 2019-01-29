import { Injectable, Inject } from '@angular/core';

import { ExampleCoreService } from 'example-core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(
      private ecs: ExampleCoreService
  ) { }

  init() { console.log('init test'); }
}
