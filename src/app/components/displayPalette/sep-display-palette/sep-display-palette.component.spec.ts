import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepDisplayPaletteComponent } from './sep-display-palette.component';

describe('SepDisplayPaletteComponent', () => {
  let component: SepDisplayPaletteComponent;
  let fixture: ComponentFixture<SepDisplayPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepDisplayPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepDisplayPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
