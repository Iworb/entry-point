import { TestBed } from '@angular/core/testing';

import { ExampleCoreService } from './example-core.service';
import { TestingService } from 'example-core/testing';
import { ExampleCoreModule } from './example-core.module';
import { APP_INITIALIZER } from '@angular/core';
import { CORE_INJECTION_TOKEN } from '../public_api';

export function testInit(ts: TestingService) {
    return () => ts.init();
}

describe('ExampleCoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [ExampleCoreModule.forRoot()],
        providers: [
            TestingService,
            {
                provide: APP_INITIALIZER,
                useFactory: testInit,
                multi: true,
                deps: [TestingService, ExampleCoreService, CORE_INJECTION_TOKEN]
            }
        ]
    }));

    it('should be created', () => {
        const service: ExampleCoreService = TestBed.get(ExampleCoreService);
        expect(service).toBeTruthy();
    });
});
