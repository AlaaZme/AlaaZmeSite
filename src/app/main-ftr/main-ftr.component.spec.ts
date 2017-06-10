import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFtrComponent } from './main-ftr.component';

describe('MainFtrComponent', () => {
  let component: MainFtrComponent;
  let fixture: ComponentFixture<MainFtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
