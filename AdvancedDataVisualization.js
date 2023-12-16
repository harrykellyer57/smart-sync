/* Filename: AdvancedDataVisualization.js */

// This code demonstrates advanced data visualization using the D3.js library

// Constants for defining the SVG dimensions and margins
const width = 800;
const height = 600;
const margin = { top: 50, right: 50, bottom: 50, left: 50 };

// Calculate the inner width and height
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Create the SVG container
const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create a group for the main visualization
const g = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data asynchronously
d3.json("data.json").then(function(data) {
  // Data processing and visualization code goes here, such as:

  // Scale the X and Y axes
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.x)])
    .range([0, innerWidth]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([innerHeight, 0]);

  // Create and draw the X and Y axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  g.append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(xAxis);

  g.append("g")
    .call(yAxis);

  // Render circles for each data point
  g.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 5)
    .attr("fill", "steelblue");

  // Add labels to each circle
  g.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", d => xScale(d.x))
    .attr("y", d => yScale(d.y) - 10)
    .text(d => d.label)
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("fill", "black");

  // Draw a line connecting the data points
  const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

  g.append("path")
    .datum(data)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);
}).catch(function(error) {
  console.log("Error loading data.");
  console.log(error);
});

// Other advanced data visualization code can be added here, such as:
// - Heatmaps
// - Bar charts
// - Scatter plots
// - Treemaps

// Note: Ensure you have the appropriate D3.js library included in the HTML file.