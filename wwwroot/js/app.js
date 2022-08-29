const dashboard = document.querySelector('.dashboard');

if (dashboard) {
    const chartSalary = document.getElementById('chart-salary');
    const chartVariableSalary = document.getElementById('chart-variable-salary');
    const chartRealtimeBudget = document.getElementById('chart-realtime-budget');
    const chartGenderEquity1 = document.getElementById('chart-gender-equity-1');
    const chartGenderEquity2 = document.getElementById('chart-gender-equity-2');
    const chartGenderEquity3 = document.getElementById('chart-gender-equity-3');

    const doughnutSalary = new Chart(chartSalary, {
        type: "doughnut",
        data: {
            labels: [],
            datasets: [{
              label: '',
              data: [40, 60],
              backgroundColor: [
                '#7F56D9',
                '#F4EBFF',
              ],
              hoverOffset: 2,
              borderColor: 'transparent',
              borderWidth: 0,
              cutout: "75%",
            }]
        },
    });
    
    const doughnutVariableSalary = new Chart(chartVariableSalary, {
        type: "doughnut",
        data: {
            labels: [],
            datasets: [{
              label: '',
              data: [20, 80],
              backgroundColor: [
                '#7F56D9',
                '#F4EBFF',
              ],
              hoverOffset: 2,
              borderColor: 'transparent',
              borderWidth: 0,
              cutout: "70%",
            }]
        },
    });
    
    const barRealtimeBudget = new Chart(chartRealtimeBudget, {
        type: "bar",
        data: {
            labels: ['Salary', 'Variable Salary', 'Total'],
            datasets: [{
              label: '',
              data: [800, 1000, 750],
              backgroundColor: [
                '#9E77ED',
                '#D6BBFB',
                '#6941C6',
              ],
              borderColor: 'transparent',
              borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'red',
                        font: {
                            size: 12,
                            lineHeight: 18,
                            family: 'Inter'
                        }
                    }
                }
            }
        },
    });

    const doughnutEquity1 = new Chart(chartGenderEquity1, {
        type: "doughnut",
        data: {
            labels: [],
            datasets: [{
              label: '',
              data: [30, 40],
              backgroundColor: [
                '#7F56D9',
                '#F4EBFF',
              ],
              hoverOffset: 2,
              borderColor: 'transparent',
              borderWidth: 0,
              cutout: "75%",
            }]
        },
    });
    const doughnutEquity2 = new Chart(chartGenderEquity2, {
        type: "doughnut",
        data: {
            labels: [],
            datasets: [{
              label: '',
              data: [40, 60],
              backgroundColor: [
                '#7F56D9',
                '#F4EBFF',
              ],
              hoverOffset: 2,
              borderColor: 'transparent',
              borderWidth: 0,
              cutout: "75%",
            }]
        },
    });
    const doughnutEquity3 = new Chart(chartGenderEquity3, {
        type: "doughnut",
        data: {
            labels: [],
            datasets: [{
              label: '',
              data: [80, 60],
              backgroundColor: [
                '#7F56D9',
                '#F4EBFF',
              ],
              hoverOffset: 2,
              borderColor: 'transparent',
              borderWidth: 0,
              cutout: "75%",
            }]
        },
    });
}    


const sidebar = document.querySelector('.sidebar');

if (sidebar) {
    const navItem= document.querySelectorAll('.sidebar__nav-item');

    navItem.forEach(item => {
        const link = item.querySelector('.sidebar__nav-link');
        
        if (link.type === 'button') {
            const collapse = item.querySelector('.accordion-collapse');
            const active = collapse.querySelector('.active');

            if (active) {
                link.ariaExpanded = true;
                collapse.classList.add('show');
            }
        }
    })
}