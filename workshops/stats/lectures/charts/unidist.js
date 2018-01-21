function uniPlot() {

var x = [];
for (var i = 0; i < 1000; i ++) {
	x[i] = math.randomInt(1, 6);
}

var trace = {
    x: x,
    type: 'histogram',
    marker: {
    color: "rgba(66, 191, 244, 0.7)",
     line: {
      color:  "rgba(66, 191, 244, 1)",
      width: 1
    }
  }
  };
var data = [trace];
Plotly.newPlot('unidist', data);
}
uniPlot();
