
// from data.js
const tableData = data;

// Get a reference to the table body
const tbody = d3.select("tbody");

function buildOrgtable()
{
    tbody.html("");
// Using d3 to append one table row `tr` for each activity
data.forEach(function(natlparkdata) {
    console.log(natlparkdata);
  var row = tbody.append("tr");
});

data.forEach((natlparkdata) => {
    var row = tbody.append("tr");
    Object.entries(natlparkdata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
   });
}
// Event handler function for the form
function runEnter() {
    tbody.html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#Activity");

  // Get the value property of the input element
  var actInput = inputElement.property("value");

  console.log(actInput); //logging activity input

 var filteredData = tableData.filter(tableData => tableData.Activity === actInput);//filtering the table for only the activity inputted

 console.log(filteredData);//logging the input

  filteredData.forEach((filteredDatarow) => {
    var row1 = tbody.append("tr");
    Object.values(filteredDatarow).forEach((value) => {
      var cell = row1.append("td");
      cell.text(value);
    });
   });

}

var button = d3.selectAll("#filter-btn");

//Creating event handlers 
button.on("click", runEnter);

buildOrgtable();
