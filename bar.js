class BarChart extends ChartCreator {
    constructor(dataUrl) {
        super(dataUrl);
        this.barCtx = document.getElementById('barChart');
    }

createCharts() {
    this.createBarChart();
}

createBarChart() {
    new Chart(this.barCtx, {
        type: 'bar',
        data: {
            labels: this.chartData.labels,
            datasets: [{
                label: '# of Votes',
                data: this.chartData.data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
}

