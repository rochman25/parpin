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
                        size: "65%"
                    },
                    track: {
                        background: "rgba(0,0,0,0)",
                        strokeWidth: "100%"
                    },
                    dataLabels: {
                        value: {
                            offsetY: 30,
                            color: "#99a2ac",
                            fontSize: "3rem"
                        }
                    }
                }
            },
            colors: ["#5eb089"],
            fill: {
                type: "gradient",
                gradient: {
                    enabled: true,
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ["#EA5455"],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                dashArray: 8
            },
            chart: {
                sparkline: {}
            },
            labels: ["Tekanan Air"]
        }
    },
    revenueComparisonLine: {
        // series: [{
        //         name: "This Month",
        //         data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
        //     },
        //     {
        //         name: "Last Month",
        //         data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
        //     }
        // ],
        chartOptions: {
            chart: {
                toolbar: { show: false },
                dropShadow: {
                    enabled: true,
                    top: 5,
                    left: 0,
                    blur: 4,
                    opacity: 0.1
                }
            },
            stroke: {
                curve: "smooth",
                dashArray: [0, 8],
                width: [4, 2]
            },
            grid: {
                borderColor: "#e7e7e7"
            },
            legend: {
                show: false
            },
            colors: ["#F97794", "#b8c2cc"],
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    inverseColors: false,
                    gradientToColors: ["#7367F0", "#b8c2cc"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                }
            },
            markers: {
                size: 0,
                hover: {
                    size: 5
                }
            },
            xaxis: {
                labels: {
                    style: {
                        cssClass: "text-grey fill-current"
                    }
                },
                axisTicks: {
                    show: false
                },
                categories: ["01", "05", "09", "13", "17", "21", "26", "31"],
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: {
                        cssClass: "text-grey fill-current"
                    },
                    formatter: function(val) {
                        return val > 999 ? (val / 1000).toFixed(1) + "k" : val;
                    }
                }
            },
            tooltip: {
                x: { show: false }
            }
        }
    }
};