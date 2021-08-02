// Create an array of each country's numbers
var all = Object.values(data.all);
var Texas = Object.values(data.texas);
var Cali = Object.values(data.cali);
var Mont = Object.values(data.mont);
var Flor = Object.values(data.flor);
//console.log(canada);

// Create an array of music provider labels
var activities = Object.keys(data.all);
//console.log(`activities`,activities);

// Display the default plot
function init() {
  var data = [{
    values: all,
    labels: activities,
    type: "pie"
  }];

  var layout = {
    height: 400,
    width: 600
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'all') {
      data = all;
  }
  else if (dataset == 'Texas') {
    data = Texas;
  }
  else if (dataset == 'California') {
      data = Cali;
  }
  else if (dataset == 'Montana') {
      data = Mont;
  }
  else if (dataset == 'Florida') {
    data = Flor;
}
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();