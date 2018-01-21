var slider = document.getElementById("myRange");
let mu;
let data = [];
var output = document.getElementById("muvalue");
output.innerHTML = slider.value; // Display the default slider value

let generateData = function(mu, sd) {

let distribution = gaussian(mu, sd);
// Take a random sample using inverse transform sampling method.

for (let i = 0; i < 1000; i ++) {
  data[i] = distribution.ppf(Math.random());
};
return data;
};

slider.oninput = function() {
  mu = this.value;
  output.innerHTML = mu;
  data = generateData(mu, 5);


Highcharts.theme = {
   colors: ['tomato']};
Highcharts.setOptions(Highcharts.theme);

function addData(chart, data) {
   chart.data = data;
   chart.update();
};

new Highcharts.chart('highchart', {
    title: {
        text: 'Highcharts Histogram'
    },
    xAxis: [{
        title: { text: 'Histogram' },
        alignTicks: false,
        opposite: false
    }],

    yAxis: [{
        title: { text: 'Histogram' },
        opposite: false
    }],

    series: [{
        name: 'Histogram',
        type: 'histogram',
        xAxis: 0,
        yAxis: 0,
        data: data,
        id: 's1',
        baseSeries: 's1',
        zIndex: -1
    }]
});
};
