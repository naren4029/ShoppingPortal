import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepMakeupComponent } from './sep-makeup.component';

describe('SepMakeupComponent', () => {
  let component: SepMakeupComponent;
  let fixture: ComponentFixture<SepMakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepMakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
