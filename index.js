const NUMBER_CFG = { count: 8, min: -100, max: 100 };

// function getRandomData(count, min, max) {
//   let tempArray = [];

//   for (let i = 0; i < count; i++) {
//     tempArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
//   }
// }

// var years = ['10/2015', '10/2016', '10/2017', '10/2018', '10/2019', '10/2020'];

// var gcScore = getRandomData(6, 30, 80);
// var enviroment = getRandomData(6, 30, 80);
// var humanRights = getRandomData(6, 30, 80);
// var labourRights = getRandomData(6, 30, 80);
// var antiCorruption = getRandomData(6, 30, 80);

var years = ['10/2015', '10/2016', '10/2017', '10/2018', '10/2019', '10/2020'];

var gcScore = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
var enviroment = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
var humanRights = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
var labourRights = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
var antiCorruption = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433];

const data = {
  labels: years,
  datasets: [
    {
      data: gcScore,
      label: 'GC Score',
      borderColor: '#3e95cd',
      fill: false,
    },
    {
      data: enviroment,
      label: 'Enviroment',
      borderColor: '#3e95cd',
      fill: false,
    },
    {
      data: humanRights,
      label: 'Human Rights',
      borderColor: '#3e95cd',
      fill: false,
    },
    {
      data: labourRights,
      label: 'Labour Rights',
      borderColor: '#3e95cd',
      fill: false,
    },
    {
      data: antiCorruption,
      label: 'Anti Corruption',
      borderColor: '#3e95cd',
      fill: false,
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  },
};

var myChart = new Chart(document.getElementById('chart'), config);
