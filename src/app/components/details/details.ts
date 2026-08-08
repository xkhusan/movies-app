import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsMovies } from "../details-movies/details-movies";
import { DetailsActors } from "../details-actors/details-actors";
import { DetailsReviews } from "../details-reviews/details-reviews";

@Component({
  selector: 'app-details',
  imports: [DetailsMovies, DetailsActors, DetailsReviews],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnChanges, OnInit, AfterContentInit, AfterViewInit {
  constructor() { }

  ngOnChanges(): void {
    console.log('ngOnChanges is called');
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
  }
}
