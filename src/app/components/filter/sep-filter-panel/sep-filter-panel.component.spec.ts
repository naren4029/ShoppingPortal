import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepFilterPanelComponent } from './sep-filter-panel.component';

describe('SepFilterPanelComponent', () => {
  let component: SepFilterPanelComponent;
  let fixture: ComponentFixture<SepFilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepFilterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
