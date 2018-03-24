function setup() {
  var data = [];
  var muSlider = document.getElementById('range1');
  var sdSlider = document.getElementById('range2');
  var mu = muSlider.value*1;
  var sd = sdSlider.value*1;
  var mu_out = document.getElementById("mu");
  mu_out.innerHTML = mu;
  var sd_out = document.getElementById("sd");
  sd_out.innerHTML = sd;


  function generateData(mu, sd) {
    for(i = 0; i < 1000; i++) {
      data[i] = randomGaussian(mu, sd);
    }
    return data;
  }

  data = generateData(mu, sd);
  var chart2 = new histchart('chart2', 'Histogram 2', data).chart();


  muSlider.onchange = function() {
    mu = this.value;
    mu_out.innerHTML = mu;
    data = generateData(mu*1, sd*1);
    new histchart('chart2', 'Histogram 2', data).chart();
  }

  sdSlider.onchange = function() {
    sd = this.value;
    sd_out.innerHTML = sd;
    data = generateData(mu*1, sd*1);
    new histchart('chart2', 'Histogram 2', data).chart();
  }

}
