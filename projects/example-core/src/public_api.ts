import { InjectionToken } from '@angular/core';

/*
 * Public API Surface of example-core
 */

export const CORE_INJECTION_TOKEN = new InjectionToken<any>('InjectionToken for core');

export * from './lib/CoreModel';
export * from './lib/example-core.service';
export * from './lib/example-core.component';
export * from './lib/example-core.module';
