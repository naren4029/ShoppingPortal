import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepBrushesComponent } from './sep-brushes.component';

describe('SepBrushesComponent', () => {
  let component: SepBrushesComponent;
  let fixture: ComponentFixture<SepBrushesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepBrushesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepBrushesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
