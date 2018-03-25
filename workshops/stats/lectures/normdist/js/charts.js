class histchart {
  constructor(id = 'chart1', title = 'Histogram', data = [1, 5, 6]) {
    this.id = id;
    this.title = title;
    this.data = data;
  }
  chart() {
    return Highcharts.chart(this.id, {
      title: {
        text: 'Normale verdeling'
      },
      xAxis: [{
        title: {
          text: this.title
        },
        min: -15,
        max: 15,
        alignTicks: false,
        opposite: false
      }],

      yAxis: [{
        title: {
          text: 'Histogram'
        },
        opposite: false
      }],
      series: [{
        name: 'Histogram',
        type: 'histogram',
        data: this.data,
        id: 's1',
        xAxis: 0,
        yAxis: 0,
        baseSeries: 's1',
        zIndex: -1,
        color: 'OrangeRed'
      }]
    })
  }
};

class bellchart {
  constructor(id = 'chart1', title = 'Gauss Curve', data = [1, 5, 6]) {
    this.id = id;
    this.title = title;
    this.data = data;
  }
  chart() {
    var pointsInInterval = 5;
      return Highcharts.chart(this.id, {

        title: {
          text: null
        },

        legend: {
          enabled: false
        },

        xAxis: [{
          title: {
            text: 'Bins'
          },
          min: -15,
          max: 15,
          visible: true
        }, {
          title: {
            text: this.title
          },
          min: -15,
          max: 15,
          opposite: true,
          visible: false
        }],

        yAxis: [{
          title: {
            text: 'Count'
          },
          visible: true
        }, {
          title: {
            text: this.title
          },
          opposite: true,
          visible: false
        }],
        plotOptions: {
        series: {
            color: 'rgb(255,69,0,0.4)',
            fillColor: 'rgb(255,69,0,0)'

        }
    },
    series: [{
          name: 'Histogram',
          type: 'histogram',
          xAxis: 0,
          yAxis: 0,
          baseSeries: 's1',
          zIndex: 0,
          color: 'rgb(46, 184, 184, 0.8)'
        },
        {
          name: 'Bell curve asd',
          type: 'bellcurve',
          data: this.data,
          id: 's1',
          xAxis: 1,
          yAxis: 1,
          pointsInInterval: pointsInInterval,
          intervals: 4,
          baseSeries: 's1',
          zIndex: -1,
          marker: {
            enabled: false
          }
        }]
      })
    }
  };
