# Submodule InjectionToken issues

## Issue

There's 2 entry points: `example-core` and `example-core/testing`. _ExampleCoreService_ has an InjectionToken _CORE_INJECTION_TOKEN_ declared in the same entry point and provided in _ExampleCoreModule.forRoot()_.
Service from `example-core/testing` is _APP_INITIALIZER_ service. It's using _ExampleCoreService_. It's used in `.spec` files as initializer or in the application to set some specific localStorage data for tests.
It works in application and provides this token when used in application, but it doesn't work in tests for `example-core` specs - module doesn't provide token.

There's 2 entry points: `example-core` and `example-core/testing`.

Testing one contains `TestingService` which should be used as _APP_INITIALIZER_. It depends on `ExampleCoreService` from main entry point, which depends on InjectionToken _CORE_INJECTION_TOKEN_. It works in application, but fails in tests for library. Both application and test module imports:

    ExampleCoreModule.forRoot() // provides CORE_INJECTION_TOKEN

which should provide InjectionToken _CORE_INJECTION_TOKEN_.

Both application and test has an initiallizer:

    export function testInit(ts: TestingService) {
        return () => ts.init();
    }
    ...
    {
        provide: APP_INITIALIZER,
        useFactory: testInit,
        multi: true,
        deps: [TestingService, ExampleCoreService, CORE_INJECTION_TOKEN]
    }

But application works and there's correct injection token provided, but `npm run test:lib` says:

> Error: StaticInjectorError(DynamicTestModule)[InjectionToken InjectionToken for core]:<br>&nbsp;&nbsp;StaticInjectorError(Platform: core)[InjectionToken InjectionToken for core]: <br>&nbsp;&nbsp;&nbsp;&nbsp;NullInjectorError: No provider for InjectionToken InjectionToken for core!