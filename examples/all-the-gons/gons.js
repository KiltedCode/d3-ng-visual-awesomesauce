var polygon = 
d3.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .curve(d3.curveLinearClosed);

var pacman = d3.arc()
    .innerRadius(0)
    .outerRadius(95)
    .startAngle(2 * Math.PI + Math.PI / 4)
    .endAngle(Math.PI - Math.PI / 4);


var pentData = [
    {'x': 240, 'y': 169},
    {'x': 145, 'y': 100},
    {'x': 50, 'y': 169},
    {'x': 86, 'y': 281},
    {'x': 204, 'y': 281}
];

var hexData = [
    {'x': 550, 'y': 200},
    {'x': 500, 'y': 113},
    {'x': 400, 'y': 113},
    {'x': 350, 'y': 200},
    {'x': 400, 'y': 287},
    {'x': 500, 'y': 287}
];

var svg = 
d3.select('body')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 500);
    
svg.append('path')
    .attr('d', polygon(pentData))
    .attr('stroke', 'red')
    .attr('stroke-width', 3)
    .attr('fill', 'rgba(255, 0, 0, 0.3)');

svg.append('text')
    .attr('x', 150)
    .attr('y', 340)
    .attr('font-family', 'Verdana')
    .attr('font-size', 35)
    .style('text-anchor', 'middle')
    .text('Pentagon');  

svg.append('path')
    .attr('d', polygon(hexData))
    .attr('stroke', 'blue')
    .attr('stroke-width', 3)
    .attr('fill', 'rgba(0, 0, 255, 0.3)');
    
    svg.append('text')
        .attr('x', 455)
        .attr('y', 340)
        .attr('font-family', 'Verdana')
        .attr('font-size', 35)
        .style('text-anchor', 'middle')
        .text('Hexagon'); 

svg.append('path')
    .attr('d', pacman())
    .attr('stroke', 'rgb(253,255,0)')
    .attr('stroke-width', 3)
    .attr('fill', 'rgba(253,255,0, 0.4)')
    .attr('transform', 'translate(750, 185)');
    
    svg.append('text')
        .attr('x', 765)
        .attr('y', 340)
        .attr('font-family', 'Verdana')
        .attr('font-size', 35)
        .style('text-anchor', 'middle')
        .text('Omnomnomagon'); 

