import { NgModule, ModuleWithProviders } from '@angular/core';
import { ExampleCoreComponent } from './example-core.component';
import { CORE_INJECTION_TOKEN } from '../public_api';

@NgModule({
  declarations: [ExampleCoreComponent],
  imports: [
  ],
  exports: [ExampleCoreComponent]
})
export class ExampleCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExampleCoreModule,
      providers: [
        {
          provide: CORE_INJECTION_TOKEN,
          useValue: 'library token'
        },
      ]
    };
  }
}
