const lineCtx = document.getElementById('lineChart').getContext('2d');
const mailOrdersCtx = document.getElementById('mailOrdersChart').getContext('2d');
const onlineCtx = document.getElementById('onlineChart').getContext('2d');
const inStoreCtx = document.getElementById('inStoreChart').getContext('2d');

new Chart(lineCtx, {
type: 'line',
data: {
    labels: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4', '2013 Q1', '2013 Q2'],
    datasets: [{
    label: 'Sales',
    data: [0, 5000, 4000, 6000, 7000, 8000, 9000, 15000, 12000, 10000],
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    pointBackgroundColor: 'white',
    pointBorderColor: 'white',
    pointRadius: 5,
    pointHoverRadius: 7,
    fill: false,
    tension: 0.1
    }]
},
options: {
    scales: {
    x: {
        ticks: {
        color: 'white'
        },
        grid: {
        display: false
        }
    },
    y: {
        ticks: {
        color: 'white'
        },
        grid: {
        color: 'rgba(255, 255, 255, 0.2)'
        }
    }
    },
    plugins: {
    legend: {
        display: false
    }
    }
}
});

const createDoughnutChart = (ctx, data, color) => {
new Chart(ctx, {
    type: 'doughnut',
    data: {
    datasets: [{
        data: [data, 100 - data],
        backgroundColor: [color, 'rgba(255, 255, 255, 0.2)'],
        borderWidth: 0
    }]
    },
    options: {
    cutout: '70%',
    plugins: {
        legend: {
        display: false
        }
    }
    }
});
};

createDoughnutChart(mailOrdersCtx, 20, 'white');
createDoughnutChart(onlineCtx, 50, 'white');
createDoughnutChart(inStoreCtx, 30, 'white');
