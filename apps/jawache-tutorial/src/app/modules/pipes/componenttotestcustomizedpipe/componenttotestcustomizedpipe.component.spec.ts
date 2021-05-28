import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenttotestcustomizedpipeComponent } from './componenttotestcustomizedpipe.component';

describe('ComponenttotestcustomizedpipeComponent', () => {
  let component: ComponenttotestcustomizedpipeComponent;
  let fixture: ComponentFixture<ComponenttotestcustomizedpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenttotestcustomizedpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenttotestcustomizedpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
