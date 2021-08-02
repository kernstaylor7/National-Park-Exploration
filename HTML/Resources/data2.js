var all = {
    
    x: ["Parks", "Trails", "Monuments", "Rec. Areas",
      "Shoreline"],
    y: [169, 151, 80, 67, 35],
    type: "bar"
  };
  
  var data = [all];
  
   var layout = {
      title: "National Parks & Sites",
      xaxis: { title: "Types of Sites"},
      yaxis: { title: "# of Parks/Sites"}
   };
  
  Plotly.newPlot("plot", data, layout);