// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sightings data from data.js
console.log(data);

// Loop Through `data` and console.log each ufo sighting object
data.forEach(function(sightingReport){
  console.log(sightingReport);
});


// Use d3 to append one table row `tr` for each ufo report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
// "nested for loop" approach
data.forEach(function(sightingReport) {
  var row = tbody.append("tr");

  Object.entries(sightingReport).forEach(function([key, value]) {
      console.log(key,value);
      var cell = tbody.append("td");
      cell.text(value);
  });
});

var inputField = d3.select(".#datetime")
// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});