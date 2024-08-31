export function schedule(){
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    let ctx = document.getElementById('myChart');
    if(ctx){
        ctx.getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Биржа',
                    data: [10, 30, 50, 70, 40, 50, 60], // Данные для графика
                    backgroundColor: 'rgb(14, 156, 255,.2)',
                    borderColor: '#0E9CFF',
                    borderWidth: 3.13,
                    cursor: 'pointer',
                    pointBackgroundColor: '#0E9CFF',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
                    fill: true, // Закрашивание под графиком
                }]
            },
            options: {
                maintainAspectRatio: true,
                scales: {
                    x: {
                        ticks: {
                            color: 'white', // Цвет меток оси X
                            font: {
                                size: rootFontSize
                            }
                        },
                        grid: {
                            color: 'white',
                            lineWidth: 1.57
                        },
                        border: {
                            dash: [5, 5]
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 25, // шаг между метками на оси Y
                            color: 'white',
                            font: {
                                size: rootFontSize
                            }
                        },
                        grid: {
                            color: 'white',
                            lineWidth: 1.57
                        },
                        border: {
                            dash: [5, 5]
                        },
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    
                },
                interaction: {
                    intersect: false, // Если нужно, чтобы курсор менялся только на точках данных
                    mode: 'nearest' // Если нужно, чтобы курсор менялся только на ближайших точках данных
                }
            }
        });
    }
    
   
}