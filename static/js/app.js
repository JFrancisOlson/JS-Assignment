// from data.js
var ufoSightings = data;

// YOUR CODE HERE!
// select the filter button
var  submit = d3.select("#filter-btn");

submit.on("click", function() {

  // prevent the page from refreshing
  d3.event.preventDefault();

  // select the input element
  var inputElement = d3.select("#datetime");

  // get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufoSightings);

  var filteredData = ufoSightings.filter(sighting => sighting.datetime === inputValue)
  
  console.log(filteredData);

  var tbody = d3.select("tbody");

  filteredData.forEach(function(sightingReport) {
    var row = tbody.append("tr");

    Object.entries(sightingReport).forEach(function([key, value]) {
      console.log(key,value);
      var cell = tbody.append("td");
      cell.text(value);
  });
});

});




  