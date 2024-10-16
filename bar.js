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
class BarChart extends ChartCreator {
    constructor(dataUrl) {
        super(dataUrl);
        this.barCtx = document.getElementById('barChart');
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

createCharts() {
    const ctx = this.barCtx.getContext('2d'); // Use barCtx instead of lineCtx
    const barChart = new Chart(ctx, {
        type: 'bar', // Change to 'bar' type
        data: {
            labels: this.chartData.labels || ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Number of Students',
                data: this.chartData.data || [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
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