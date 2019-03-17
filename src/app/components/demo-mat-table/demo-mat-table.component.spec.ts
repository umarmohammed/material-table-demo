import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMatTableComponent } from './demo-mat-table.component';

describe('DemoMatTableComponent', () => {
  let component: DemoMatTableComponent;
  let fixture: ComponentFixture<DemoMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
