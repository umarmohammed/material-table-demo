import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCdkScrollComponent } from './demo-cdk-scroll.component';

describe('DemoCdkScrollComponent', () => {
  let component: DemoCdkScrollComponent;
  let fixture: ComponentFixture<DemoCdkScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCdkScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCdkScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
