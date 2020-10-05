// document.getElementById("fname").addEventListener("change", inputRange());
// function inputRange() {
// };
// d3.selectAll("svg > *").remove();
// var input = document.getElementById("fname");

var caratWeights =[];
d3.json('data/data.json').then(function(data){ 
  data.forEach(function(d){
    if(d.caratWeight!=null)
    caratWeights.push(d.caratWeight);
  })
  
  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17
  let bin = d3.bin().domain([0, 100]).thresholds(100);

  let bins = bin(caratWeights);

  // define dimensions and margins for the graphic
  var margin = ({top: 10, right: 0, bottom: 10, left: 0})
      width = 1200,
      height = 350 - margin.top - margin.bottom;

  // Define the scales
  var x = d3.scaleLinear()
    .domain([bins[0].x0, bins[bins.length - 1].x1])
    .range([margin.left, width - margin.right]);
    
  var y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
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
      .data(bins)
      .join("line")
      .attr("x1", d => x(d.x0) + 5)
      .attr("x2", d => x(d.x0) + 5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - 10)
    // svg.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .attr("class", "axisWhite")
    //   .call(d3.axisBottom(x));
    svg.append("line")
      .attr("x1", d => x(d.x0) + 5)
      .attr("x2", d => x(d.x0) + 5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - 10)
      .each(function(d) {this._current = d;} )
});

///// viz2 /////

d3.json('data/data.json').then(function(data){ 
  data.forEach(function(d){
    if(d.caratWeight!=null)
    caratWeights.push(d.caratWeight);
  })
  
  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17
  let bin = d3.bin().domain([0, 100]).thresholds(100);

  let bins = bin(caratWeights);

  // define dimensions and margins for the graphic
  var margin = ({top: 10, right: 0, bottom: 10, left: 0})
      width = 1200,
      height = 350 - margin.top - margin.bottom;

  // Define the scales
  var x = d3.scaleLinear()
    .domain([bins[0].x0, bins[bins.length - 1].x1])
    .range([margin.left, width - margin.right]);
    
  var y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([height - margin.bottom, margin.top]);

    // create an svg container from scratch
  var svg = d3.select('#viz2')
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
      .data(bins)
      .join("line")
      .attr("x1", d => x(d.x0) + 5)
      .attr("x2", d => x(d.x0) + 5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
    // svg.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .attr("class", "axisWhite")
    //   .call(d3.axisBottom(x));
    svg.append("line")
      .attr("x1", d => x(d.x0) + 5)
      .attr("x2", d => x(d.x0) + 5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
      .each(function(d) {this._current = d;} )
});

///// viz3 /////

d3.json('data/data.json').then(function(data){ 
  data.forEach(function(d){
    if(d.caratWeight!=null)
    caratWeights.push(d.caratWeight);
  })
  
  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17
  let bin = d3.bin().domain([0, 100]).thresholds(100);

  let bins = bin(caratWeights);

  // define dimensions and margins for the graphic
  var margin = ({top: 2, right: 0, bottom: 2, left: 0})
      width = 350,
      height = 125 - margin.top - margin.bottom;

  // Define the scales
  var x = d3.scaleLinear()
    .domain([bins[0].x0, bins[bins.length - 1].x1])
    .range([margin.left, width - margin.right]);
    
  var y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([height - margin.bottom, margin.top]);

    // create an svg container from scratch
  var svg = d3.select('#viz3')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("fill", "white");
    
    // attach a graphic element, and append rectangles to it
    svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(bins)
      .join("line")
      .attr("x1", d => x(d.x0) + 1)
      .attr("x2", d => x(d.x0) + 1)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
    // svg.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .attr("class", "axisWhite")
    //   .call(d3.axisBottom(x));
    svg.append("line")
      .attr("x1", d => x(d.x0) + 1)
      .attr("x2", d => x(d.x0) + 1)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
      .each(function(d) {this._current = d;} )
});

///// viz4 /////

d3.json('data/data.json').then(function(data){ 
  data.forEach(function(d){
    if(d.caratWeight!=null)
    caratWeights.push(d.caratWeight);
  })
  
  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17
  let bin = d3.bin().domain([0, 15]).thresholds(100);

  let bins = bin(caratWeights);

  // define dimensions and margins for the graphic
  var margin = ({top: 3, right: 0, bottom: 3, left: 0})
      width = 350,
      height = 125 - margin.top - margin.bottom;

  // Define the scales
  var x = d3.scaleLinear()
    .domain([bins[0].x0, bins[bins.length - 1].x1])
    .range([margin.left, width - margin.right]);
    
  var y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([height - margin.bottom, margin.top]);

    // create an svg container from scratch
  var svg = d3.select('#viz4')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("fill", "white");
    
    // attach a graphic element, and append rectangles to it
    svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 3)
      .selectAll("line")
      .data(bins)
      .join("line")
      .attr("x1", d => x(d.x0) + 1.5)
      .attr("x2", d => x(d.x0) + 1.5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
    // svg.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .attr("class", "axisWhite")
    //   .call(d3.axisBottom(x));
    svg.append("line")
      .attr("x1", d => x(d.x0) + 1.5)
      .attr("x2", d => x(d.x0) + 1.5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
      .each(function(d) {this._current = d;} )
});

///// viz5 /////

d3.json('data/data.json').then(function(data){ 
  data.forEach(function(d){
    if(d.caratWeight!=null)
    caratWeights.push(d.caratWeight);
  })
  
  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17
  let bin = d3.bin().domain([0, 5]).thresholds(50);

  let bins = bin(caratWeights);

  // define dimensions and margins for the graphic
  var margin = ({top: 5, right: 0, bottom: 5, left: 0})
      width = 350,
      height = 125 - margin.top - margin.bottom;

  // Define the scales
  var x = d3.scaleLinear()
    .domain([bins[0].x0, bins[bins.length - 1].x1])
    .range([margin.left, width - margin.right]);
    
  var y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([height - margin.bottom, margin.top]);

    // create an svg container from scratch
  var svg = d3.select('#viz5')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("fill", "white");
    
    // attach a graphic element, and append rectangles to it
    svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 5)
      .selectAll("line")
      .data(bins)
      .join("line")
      .attr("x1", d => x(d.x0) + 2.5)
      .attr("x2", d => x(d.x0) + 2.5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
    // svg.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .attr("class", "axisWhite")
    //   .call(d3.axisBottom(x));
    svg.append("line")
      .attr("x1", d => x(d.x0) + 2.5)
      .attr("x2", d => x(d.x0) + 2.5)
      .attr("y2", d => y(d.length))
      .attr("y1", height - d)
      .each(function(d) {this._current = d;} )
});