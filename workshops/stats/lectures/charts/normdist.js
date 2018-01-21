let mean;
function normalPlot() {

mean = 0;
var distribution = gaussian(mean, 1);
// Take a random sample using inverse transform sampling method.

var x = [];
for (var i = 0; i < 1000; i ++) {
	x[i] = distribution.ppf(Math.random());
}

var trace = {
    x: x,
    type: 'histogram',
    marker: {
    color: "rgba(255, 100, 102, 0.7)",
     line: {
      color:  "rgba(255, 100, 102, 1)",
      width: 1
    }
  }
  };
var data = [trace];
Plotly.newPlot('normaldist', data);
}
normalPlot();
