import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CORE_INJECTION_TOKEN, ExampleCoreService, ExampleCoreModule } from 'example-core';
import { TestingService } from 'example-core/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function testInit(ts: TestingService) {
  return () => ts.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleCoreModule.forRoot()
  ],
  providers: [
    ExampleCoreService,
    {
      provide: APP_INITIALIZER,
      useFactory: testInit,
      multi: true,
      deps: [TestingService, ExampleCoreService, CORE_INJECTION_TOKEN]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
