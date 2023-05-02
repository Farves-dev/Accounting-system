import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

export interface Dashboard {
    holderName: string;
    paymentMode: string;
    date: string;
    description: string;
    creditAmount: number;
    position: number;
    debitAmount: number | string;
}

const ELEMENT_DATA: Dashboard[] = [
    {
        position: 1,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
    {
        position: 2,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
    {
        position: 3,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
    {
        position: 4,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
    {
        position: 5,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
    {
        position: 6,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
    {
        position: 7,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
    {
        position: 8,
        holderName: 'Farves',
        paymentMode: 'Gpay',
        date: '23/04/2023',
        creditAmount: 2000,
        debitAmount: '-',
        description: 'Event Organizing',
    },
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    cashflowChart: ApexOptions = {};
    profitAndLossChart: ApexOptions = {};

    constructor() {}

    displayedColumns: string[] = [
        'position',
        'holderName',
        'paymentMode',
        'date',
        'creditAmount',
        'debitAmount',
        'description',
    ];
    dataSource = ELEMENT_DATA;

    ngOnInit(): void {
        this.get();
    }

    get() {
        this.cashflowChart = {
            chart: {
                animations: {
                    enabled: true,
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '350px',
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: false,
                },
                type: 'area',
                sparkline: {
                    enabled: false,
                },
            },
            labels: [
                '13 Mar 2023',
                '14 Mar 2023',
                '15 Mar 2023',
                '16 Mar 2023',
                '17 Mar 2023',
                '20 Mar 2023',
            ],
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: true,
                position: 'top',
            },
            colors: ['#2D98FF', '#FF417C'],
            series: [
                {
                    name: 'Expense',
                    data: [1000, 3200, 1300, 4000, 5000, 2000],
                },
                {
                    name: 'Income',
                    data: [6000, 1000, 4000, 2000, 3000, 1000],
                },
            ],
            stroke: {
                curve: 'smooth',
                lineCap: 'round',
                dashArray: [8, 8],
                width: 3,

                colors: ['#2D98FF', '#FF417C'],
            },
            tooltip: {
                followCursor: false,
                theme: 'light',
            },
            // title: {
            //     text: 'Cashflow',
            // },
            xaxis: {
                axisBorder: {
                    show: true,
                },
                axisTicks: {
                    color: '#000',
                },
                labels: {
                    style: {
                        colors: '#000',
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                // show: false,
                labels: {
                    offsetX: -16,
                    style: {
                        colors: '#000',
                    },
                },
            },
        };

        // this.profitAndLossChart = {
        //     chart: {
        //         fontFamily: 'inherit',
        //         foreColor: 'inherit',
        //         height: '100%',
        //         type: 'radar',
        //         sparkline: {
        //             enabled: true,
        //         },
        //     },
        //     title: {
        //         text: 'Profit and Loss',
        //     },
        //     colors: ['#818CF8'],
        //     dataLabels: {
        //         enabled: true,
        //         formatter: (val: number): string | number => `${val}%`,
        //         textAnchor: 'start',
        //         style: {
        //             fontSize: '13px',
        //             fontWeight: 500,
        //         },
        //         // background: {
        //         //     borderWidth: 0,
        //         //     padding: 4,
        //         // },
        //         offsetY: -15,
        //     },
        //     markers: {
        //         strokeColors: '#818CF8',
        //         strokeWidth: 4,
        //     },
        //     plotOptions: {
        //         radar: {
        //             polygons: {
        //                 strokeColors: 'var(--fuse-border)',
        //                 connectorColors: 'var(--fuse-border)',
        //             },
        //         },
        //     },
        //     series: [
        //         {
        //             name: 'Profit',
        //             data: [1000, 3200, 1300, 4000, 5000, 2000],
        //         },
        //         {
        //             name: 'Loss',
        //             data: [6000, 1000, 4000, 2000, 3000, 1000],
        //         },
        //     ],
        //     stroke: {
        //         width: 2,
        //     },
        //     tooltip: {
        //         theme: 'light',
        //         y: {
        //             formatter: (val: number): string => `${val}%`,
        //         },
        //     },
        //     xaxis: {
        //         labels: {
        //             show: true,
        //             style: {
        //                 fontSize: '12px',
        //                 fontWeight: '500',
        //             },
        //         },
        //         categories: [
        //             '13 Mar 2023',
        //             '14 Mar 2023',
        //             '15 Mar 2023',
        //             '16 Mar 2023',
        //             '17 Mar 2023',
        //             '20 Mar 2023',
        //         ],
        //     },

        //     yaxis: {
        //         max: (max: number): number =>
        //             parseInt((max + 10).toFixed(0), 10),
        //         tickAmount: 7,
        //     },
        // };

        this.profitAndLossChart = {
            series: [
                {
                    name: 'Profit',
                    data: [20, 100, 40, 30, 50, 80, 33],
                },
                {
                    name: 'Loss',
                    data: [66, 54, 25, 46, 89, 21, 67],
                },
            ],
            chart: {
                height: '350px',
                type: 'radar',
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        //   strokeColor: "#e9e9e9",
                        fill: {
                            colors: ['#f8f8f8', '#fff'],
                        },
                    },
                },
            },
            // title: {
            //     text: 'Profit and Loss',
            // },
            colors: ['#FF709D', '#64B3FF'],
            markers: {
                size: 4,
                colors: ['#FF709D', '#64B3FF'],
                // strokeColors: ['#000'],
                strokeColors: ['#64B3FF', '#FF709D'],
                strokeWidth: 2,
            },
            // tooltip: {
            //   y: {
            //     formatter: function(val) {
            //       return val;
            //     }
            //   }
            // },

            tooltip: {
                theme: 'light',
                y: {
                    formatter: (val: number): string => `${val}%`,
                },
            },
            fill: {
                opacity: 0.3,
                // colors: ["#000", "green"]
            },
            stroke: {
                width: 2,
            },

            xaxis: {
                categories: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ],
            },

            yaxis: {
                show: false,
                // tickAmount: 0,
                // labels: {
                //     formatter: function(val, i) {
                //       if (i % 2 === 0) {
                //         return val;
                //       } else {
                //         return "";
                //       }
                //     }
                // },
            },
        };
    }
}
