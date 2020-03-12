import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepSingleProductViewComponent } from './sep-single-product-view.component';

describe('SepSingleProductViewComponent', () => {
  let component: SepSingleProductViewComponent;
  let fixture: ComponentFixture<SepSingleProductViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepSingleProductViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepSingleProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
