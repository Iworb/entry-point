import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCoreComponent } from './example-core.component';

describe('ExampleCoreComponent', () => {
  let component: ExampleCoreComponent;
  let fixture: ComponentFixture<ExampleCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
