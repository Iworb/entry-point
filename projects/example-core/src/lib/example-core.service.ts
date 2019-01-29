import { Injectable, Inject } from '@angular/core';
import { CORE_INJECTION_TOKEN } from '../public_api';

@Injectable({
  providedIn: 'root'
})
export class ExampleCoreService {

  constructor(
    @Inject(CORE_INJECTION_TOKEN) private cit: any
  ) {
    console.log('ExampleCoreService tokem provided: ', this.cit);
  }
}
