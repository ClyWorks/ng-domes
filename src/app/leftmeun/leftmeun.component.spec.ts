import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftmeunComponent } from './leftmeun.component';

describe('LeftmeunComponent', () => {
  let component: LeftmeunComponent;
  let fixture: ComponentFixture<LeftmeunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftmeunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftmeunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
