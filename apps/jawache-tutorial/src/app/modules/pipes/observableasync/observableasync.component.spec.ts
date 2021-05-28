import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableasyncComponent } from './observableasync.component';

describe('ObservableasyncComponent', () => {
  let component: ObservableasyncComponent;
  let fixture: ComponentFixture<ObservableasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableasyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
