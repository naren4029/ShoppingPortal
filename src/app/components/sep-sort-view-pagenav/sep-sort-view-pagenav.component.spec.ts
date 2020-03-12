import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepSortViewPagenavComponent } from './sep-sort-view-pagenav.component';

describe('SepSortViewPagenavComponent', () => {
  let component: SepSortViewPagenavComponent;
  let fixture: ComponentFixture<SepSortViewPagenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepSortViewPagenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepSortViewPagenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
