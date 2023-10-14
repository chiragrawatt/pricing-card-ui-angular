import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCardHolderComponent } from './price-card-holder.component';

describe('PriceCardHolderComponent', () => {
  let component: PriceCardHolderComponent;
  let fixture: ComponentFixture<PriceCardHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceCardHolderComponent]
    });
    fixture = TestBed.createComponent(PriceCardHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
