// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var totalProductos = document.getElementById("total-productos").textContent;
var pendientes = document.getElementById("pendientes").textContent;
var proceso = document.getElementById("proceso").textContent;
var finalizados = document.getElementById("finalizados").textContent;
var ctx = document.getElementById("myBarChart2");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Frisbee para Perros Dog Activity", "Bozal flexible de silicona Talla M-L", "Hematofos B12 ®", "Arnés de Seguridad. Dog Factor. Talla XL"],
    datasets: [{
      label: "Cantidad",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [2, 3, 1, 1],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'Cantidad'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 4
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 20,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
