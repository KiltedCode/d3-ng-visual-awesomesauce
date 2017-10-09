import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rhsun-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  @Input()
  set arcFilter(afilt: any) {
    for(let filterName in afilt) {
      let filterValue = afilt[filterName];
      if(this.filters[filterName]) {
        let i = this.filters[filterName].indexOf(filterValue);
        if(i === -1) {
          this.filters[filterName].push(filterValue);
        }
      } else {
        this.filters[filterName] = [filterValue];
      }
    }
    this.onFilter.emit(this.filters);
  }

  @Output()
  onFilter: EventEmitter<any> = new EventEmitter<any>();

  parks: string[];
  types: string[];

  filters: any;

  constructor() { }

  filter(filterName: string, filterValue: string) {
    if(this.filters[filterName]) {
      let i = this.filters[filterName].indexOf(filterValue);
      if(i === -1) {
        this.filters[filterName].push(filterValue);
      } else {
        this.filters[filterName].splice(i, 1);
      }
    } else {
      this.filters[filterName] = [filterValue];
    }

    this.onFilter.emit(this.filters);
  }

  ngOnInit() {
    this.filters = {};

    this.parks = [
      'Epcot', 
      'Magic Kingdom', 
      'Disney\'s Hollywood Studios', 
      'Disney\'s Animal Kingdom',
      'LEGOLAND Florida',
      'Universal\'s Islands of Adventure',
      'Universal Studios Orlando'
    ];

    this.types = [
      'ride',
      'food',
      'character',
      'show',
      'shop'
    ];

  }

}
