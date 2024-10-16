class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
    }
    async init() {
        await this.fetchData();
        if (this.chartData) {
            this.createCharts();
        }
    }
    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            this.chartData = await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    createCharts() {
        throw new Error('createCharts() must be implemented in subclasses');
    }
}
class LineChart extends ChartCreator {
    constructor(dataUrl) {
        super(dataUrl);
        this.lineCtx = document.getElementById('linechart');
    }
    // Overriding createCharts to create the line chart
    createCharts() {
        const ctx = this.lineCtx.getContext('2d');
        const lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.chartData.labels || ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Number of Students',
                    data: this.chartData.data || [12, 19, 3, 5, 2, 3],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#e0e0e0'
                        },
                        ticks: {
                            color: '#495057'
                        }
                    },
                    x: {
                        grid: {
                            color: '#e0e0e0'
                        },
                        ticks: {
                            color: '#495057'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#333'
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });
    }
}
const lineChartCreator = new LineChart('data.json');
lineChartCreator.init(); 
