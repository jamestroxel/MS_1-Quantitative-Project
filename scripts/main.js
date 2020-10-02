// document.getElementById("fname").addEventListener("change", inputRange);
function inputRange() {
  var input = document.getElementById("fname");
  let caratWeights =[];
  d3.json('data/data.json').then(function(data){ 
    data.forEach(function(d){
      if(d.caratWeight!=null)
      caratWeights.push(d.caratWeight);
    })
  
    // Define the bins
    // we're having a cut-off at carathweight 100 and defining the number of bins at 17
    let bin = d3.bin().domain([0, input.value]).thresholds(100);
  
    let bins = bin(caratWeights);
  
       // define dimensions and margins for the graphic
       const margin = ({top: 0, right: 0, bottom: 0, left: 0})
       const width = 500;
       const height = 200;
  
    // Define the scales
    var x = d3.scaleLinear()
      .domain([bins[0].x0, bins[bins.length - 1].x1])
      .range([margin.left, width - margin.right]);
      
    var y = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .range([height - margin.bottom, margin.top]);
  
      // create an svg container from scratch
      const svg = d3.select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr("fill", "white");
      
      // attach a graphic element, and append rectangles to it
      svg.append("g")
        .attr("stroke", "white")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 2.5)
        .selectAll("line")
        .data(bins)
        .join("line")
        .attr("x1", d => x(d.x0) + 1)
        .attr("x2", d => x(d.x0) + 1)
        .attr("y2", d => y(d.length))
        .attr("y1", height - d)
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .attr("class", "axisWhite")
          .call(d3.axisBottom(x));
    });
  // console.log(input.value);
  
  // const updateRange = () => {
  //   console.log(input.value);
  // };
    
}
