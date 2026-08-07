import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMovies } from './details-movies';

describe('DetailsMovies', () => {
  let component: DetailsMovies;
  let fixture: ComponentFixture<DetailsMovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMovies],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsMovies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
