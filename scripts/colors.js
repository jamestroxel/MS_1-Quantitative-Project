d3.json('data/gemColors.json').then(function(data){
  
  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17

  // define dimensions and margins for the graphic
  var margin = ({top: 10, right: 0, bottom: 10, left: 0})
      width = 800,
      height = 450 - margin.top - margin.bottom;

  // Define the scales
  var x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right]);
    // ['pink','red','redOrange','orange','yellowOrange','yellow', 'lightYellowGreen','yellowGreen','green','darkGreen','blueGreen','lightBlue','blue','reddishBlue','purple','indigo','rainbow','blackGrey','whiteClear']  
  var y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - margin.bottom, margin.top]);

    // create an svg container from scratch
  var svg = d3.select('#viz')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("fill", "white");
    
    // attach a graphic element, and append rectangles to it
    svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 10)
      .selectAll("line")
      .data(data)
      .join("line")
      .attr("x1", d => x(d.x0) + 5)
      .attr("x2", d => x(d.x0) + 5)
      .attr("y2", d => y(d.value))
      .attr("y1", height-10)
    // svg.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .attr("class", "axisWhite")
    //   .call(d3.axisBottom(x));
    svg.append("line")
      .attr("x1", d => x(d.x0) + 5)
      .attr("x2", d => x(d.x0) + 5)
      .attr("y2", d => y(d.length))
      .attr("y1", height-10)
      .each(function(d) {this._current = d;} )
});
