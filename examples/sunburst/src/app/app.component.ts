import { Component, OnInit } from '@angular/core';

import { ParkAttraction, ParksService } from './shared/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  attractions: ParkAttraction[];
  filters: any;

  constructor(
    private parksService: ParksService
  ) { }

  ngOnInit() {
    this.parksService.getParkAttractions()
      .subscribe(
        (attrs: ParkAttraction[]) => {
          this.attractions = attrs;
        }
      );
    this.filters = {};
  }

  onFilterBar(filterList: any): void {
    this.filters = Object.assign({}, filterList);
  }
  
}
