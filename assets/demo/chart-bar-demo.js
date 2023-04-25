// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var totalProductos = document.getElementById("total-productos").textContent;
var pendientes = document.getElementById("pendientes").textContent;
var proceso = document.getElementById("proceso").textContent;
var finalizados = document.getElementById("finalizados").textContent;
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Pendientes", "En Proceso", "Finalizados", "Total"],
    datasets: [{
      label: "Cantidad",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [pendientes, proceso, finalizados, totalProductos],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'pedidos'
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
          max: 100,
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
