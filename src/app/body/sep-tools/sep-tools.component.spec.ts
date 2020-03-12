import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepToolsComponent } from './sep-tools.component';

describe('SepToolsComponent', () => {
  let component: SepToolsComponent;
  let fixture: ComponentFixture<SepToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
