import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReviews } from './details-reviews';

describe('DetailsReviews', () => {
  let component: DetailsReviews;
  let fixture: ComponentFixture<DetailsReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsReviews],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsReviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
