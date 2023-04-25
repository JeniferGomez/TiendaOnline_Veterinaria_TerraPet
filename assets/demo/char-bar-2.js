function productosMinimos() {
    const url = base_url + "admin/ProductosMinimos";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        const res = JSON.parse(this.responseText);
        let nombre = [];
        let cantidad = [];
        for (let i = 0; i < res.length; i++) {
          nombre.push(res[i]['nombre']);
          cantidad.push(res[i]['cantidad']);
        }
  
        // Actualizar gráfico con nuevos datos
        var ctx = document.getElementById("myBarChart2").getContext("2d");
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: nombre,
            datasets: [{
              label: "Cantidad",
              data: cantidad,
              backgroundColor: 'rgba(2,117,216,1)',
              borderColor: 'rgba(2,117,216,1)',
            }]
          },
          options: {
            scales: {
              xAxes: [{
                time: {
                  unit: 'Producto'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 10
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: Math.max(...cantidad) + 10,
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
      }
    };
  }
  