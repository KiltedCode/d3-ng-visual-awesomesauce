import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'rhsun-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnInit {
  
  private svg: any;

  constructor() { }

  ngOnInit() {
    
  }

}
