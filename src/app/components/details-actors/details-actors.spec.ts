import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsActors } from './details-actors';

describe('DetailsActors', () => {
  let component: DetailsActors;
  let fixture: ComponentFixture<DetailsActors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsActors],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsActors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
