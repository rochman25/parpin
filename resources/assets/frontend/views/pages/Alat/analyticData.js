export default {
    supportTrackerRadialBar: {
        // chartData: {
        //     totalTickets: 163,
        //     openTickets: 103,
        //     lastResponse: '1d',
        // },
        // series: [83],
        chartOptions: {
            plotOptions: {
                radialBar: {
                    size: 158,
                    offsetY: -30,
                    startAngle: -150,
                    endAngle: 150,
                    hollow: {
                        size: '65%',
                    },
                    track: {
                        background: "rgba(0,0,0,0)",
                        strokeWidth: '100%',
                    },
                    dataLabels: {
                        value: {
                            offsetY: 30,
                            color: '#99a2ac',
                            fontSize: '3rem'
                        }
                    }
                },
            },
            colors: ['#5eb089'],
            fill: {
                type: 'gradient',
                gradient: {
                    enabled: true,
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#EA5455'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                },
            },
            stroke: {
                dashArray: 8
            },
            chart: {
                sparkline: {}
            },
            labels: ['Tekanan Air'],
        }
    },
}