const ctx = document.getElementById('myDoughnutChart').getContext('2d');
  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Orange', 'Red', 'Green'],
      datasets: [{
        data: [30, 40, 30],
        backgroundColor: ['#F39C12', '#E74C3C', '#27AE60'],
        borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });