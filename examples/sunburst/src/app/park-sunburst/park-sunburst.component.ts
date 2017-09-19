import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import * as d3 from 'd3';

import { ParkAttraction } from '../shared';

@Component({
  selector: 'rhsun-park-sunburst',
  templateUrl: './park-sunburst.component.html',
  styleUrls: ['./park-sunburst.component.scss']
})
export class ParkSunburstComponent implements OnInit {

  @Input()
  set attractions(attrs: ParkAttraction[]) {
    if (attrs) {
      this._attractions = attrs;
      this.attractionTree = this.dataToTree(attrs);
      if(this.created) {
        this.updateChart(this.attractionTree);
      }
    }
  }

  @Input()
  set filters(filts: any) {
    this._filters = filts;
    if(this._attractions) {
      let attrs = this.filterAttractions(this._attractions, this._filters);
      this.attractionTree = this.dataToTree(attrs);
      if(this.created) {
        this.updateChart(this.attractionTree);
      }
    }
  }

  @ViewChild('chart') 
  private chartContainer: ElementRef;

  _attractions: ParkAttraction[];
  attractionTree: any;
  _filters: any;
  
  private arc: any;
  private color: any;
  private created: boolean;
  private height: number;
  private margin: number;
  private partition: any;
  private radius: number;
  private root: any;
  private svg: any;
  private tooltip: any;
  private width: number;
  private xScale: any;
  private yScale: any;

  constructor() { }

  private createChart(): void {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin * 2;
    this.height = element.offsetHeight - this.margin * 2;
    this.radius = (Math.min(this.width, this.height) / 2) - this.margin * 2
    
    /* create svg */
    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ') rotate(-90 0 0)');
    
    /* create tooltip div */
    this.tooltip = d3.select(element)
      .append('div')
      .attr('id', 'tooltip')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('opacity', 0)
      .style('background-color', 'rgba(255, 255, 255, 0.6)')
      .style('padding', '5px 10px');

    /* set up scales */
    this.xScale = d3.scaleLinear()
      .range([0, 2 * Math.PI]);
    this.yScale = d3.scaleSqrt()
      .range([0, this.radius]);
    this.color = d3.scaleOrdinal(d3.schemeCategory20c);

    /* layout */
    this.partition = d3.partition();

    /* arc function for calculating slices of sunburst */
    this.arc = d3.arc()
      .startAngle((d: any) => { return Math.max(0, Math.min(2 * Math.PI, this.xScale(d['x0']))); })
      .endAngle((d: any) => { return Math.max(0, Math.min(2 * Math.PI, this.xScale(d['x1']))); })
      .innerRadius((d: any) => { return Math.max(0, this.yScale(d['y0'])); })
      .outerRadius((d: any) => { return Math.max(0, this.yScale(d['y1'])); });

    this.created = true;
  }

  private dataToTree(dataList: ParkAttraction[]): any {
    let dataTree = {
      name : 'Theme Parks',
      children : []
    };

    if(dataList && dataList.length > 0) {
      let resorts = {};
      for(let att of dataList) {
        /* create resort if does not exist */
        if(!resorts[att.resortName]) {
          resorts[att.resortName] = {};
        }

        /* create park if does not exist */
        if(!resorts[att.resortName][att.parkName]) {
          resorts[att.resortName][att.parkName] = {};
        }

        /* create type if does not exist */
        if(!resorts[att.resortName][att.parkName][att.type]) {
          resorts[att.resortName][att.parkName][att.type] = {
            name: att.type,
            children: [],
            level: 'type'
          };
        }
        att['size'] = 1;
        att['level'] = 'attraction';
        /* add attraction */
        resorts[att.resortName][att.parkName][att.type].children.push(att);
      }

      /* convert object to arrays for tree */
      for(let re in resorts) {
        let resort = {
          name : re,
          children : [],
          level: 'resortName'
        };
        for(let pa in resorts[re]) {
          let park = {
            name : pa,
            children : [],
            level: 'parkName'
          };

          for(let ty in resorts[re][pa]) {
            park.children.push(resorts[re][pa][ty]);
          }

          resort.children.push(park);
        }
        dataTree.children.push(resort);
      }
    }

    return dataTree;
  }

  filterAttractions(attrs: ParkAttraction[], filters: any): ParkAttraction[] {
    let filtered = [];
    for(let attr of attrs) {
      let match = true;
      if(filters['parkName'] && filters['parkName'].length > 0) {
        if(filters['parkName'].indexOf(attr.parkName) === -1) {
          match = false;
        }
      }
      if(filters['type'] && filters['type'].length > 0) {
        if(filters['type'].indexOf(attr.type) === -1) {
          match = false;
        }
      }
      if(match) {
        filtered.push(attr);
      }
    }
    return filtered;
  }

  /**
   * mouseoverArc: shows tooltip dive when mouse moves over arc.
   * sets tooltip's html with helper function.
   * @param d: the current arc.
   * @returns {*}
   */
  mouseoverArc(d: any): any {
    this.tooltip.html(this.tooltipHTML(d));
    return this.tooltip.transition()
        .duration(50)
        .style('opacity', 0.9);
  }

  /**
   * mouseoutArc: hides tooltip div when mouse moves out of arcs.
   * @returns {*}
   */
  mouseoutArc(): any {
    return this.tooltip.style('opacity', 0);
  }

  /**
   * mousemoveArc: moves tooltip div as mouse moves over arcs.
   * @returns {*}
   */
  mousemoveArc(): any {
    return this.tooltip
        .style('top', (d3.event.pageY - 10) + 'px')
        .style('left', (d3.event.pageX + 10) + 'px');
  }
  
  ngOnInit() {
    this.created = false;
    if(this.attractionTree == null) {
      this.attractionTree = {
        name : 'Theme Parks',
        children : []
      };
    }
    this.margin = 10;
    this.createChart();
    this.updateChart(this.attractionTree);
  }

  private tooltipHTML(d: any): string {
    let html = '';
    let counts = {
      ride: 0,
      food: 0,
      character: 0,
      show: 0,
      shop: 0
    };
    switch(d.data.level) {
      case 'attraction':
        html = `<strong>${d.data.name}</strong>`;
        break;
      case 'type':
        html = `<strong>${d.parent.data.name}:</strong> ${d.value} ${d.data.name}`;
        if(d.value > 1) {
          html += 's';
        }
        break;
      case 'parkName':
        html = `<strong>${d.data.name}:</strong><br />`;
        for(let type of d.children) {
          counts[type.data.name] = type.value;
        }
        html +=  `${counts.ride} ride, 
                  ${counts.food} food, 
                  ${counts.character} character, 
                  ${counts.show} show, 
                  ${counts.shop} shop`
        break;
      case 'resortName':
        html = `<strong>${d.data.name}:</strong><br />
                ${d.children.length} parks`;
        break;
      default:
        html = `<strong>${d.data.name}</strong>`;
        break;
    }
    d.data.name;

    return html;
  }

  private updateChart(tree: any): void {
    // this.svg.selectAll('path').remove();

    this.root = d3.hierarchy(tree);
    this.root.sum(function(d) { return d.size; });

    /* JOIN new data with old elements */
    var path = this.svg.selectAll('path')
        .data(this.partition(this.root).descendants());

    /* ENTER new elements present in new data */
    /* UPDATE old elements present in new data */
    path.enter()
      .append('path')
      .on('mouseover', (d) => this.mouseoverArc(d))
      .on('mousemove', (d) => this.mousemoveArc())
      .on('mouseout',  (d) => this.mouseoutArc())
      .merge(path)      // ENTER + UPDATE
        .transition().duration(500)
        .attr('d', this.arc)
        .style('stroke', '#ffffff')
        .style('fill', (d: any) => { return this.color((d.children ? d : d.parent).data.name); });
        
    /* EXIT old elements not present in new data */
    path.exit()
      .transition()
      .duration(500)
      .remove();

  }

}
