import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeahhhhComponent } from './yeahhhh.component';

describe('YeahhhhComponent', () => {
  let component: YeahhhhComponent;
  let fixture: ComponentFixture<YeahhhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeahhhhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeahhhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
