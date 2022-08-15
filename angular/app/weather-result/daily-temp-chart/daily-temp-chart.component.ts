import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
let More = require('highcharts/highcharts-more');
let Windbarb = require('highcharts/modules/windbarb.js');
More(Highcharts);
Windbarb(Highcharts);

@Component({
    selector: 'app-daily-temp-chart',
    templateUrl: './daily-temp-chart.component.html',
    styleUrls: ['./daily-temp-chart.component.css']
})
export class DailyTempChartComponent implements OnInit {

    @Input() dailyData: any;


    constructor() {
        console.log("Daily Temp Chart", this.dailyData)
        

    }

    Highcharts: typeof Highcharts = Highcharts;
    chartOptions = {}
    
    getdata(graphData:any) {

        this.chartOptions = {
            chart: {
                type: 'arearange',
                zoomType: 'x',
                scrollablePlotArea: {
                    minWidth: 600,
                    scrollPositionX: 1
                },

            },

            title: {
                text: 'Temperature Ranges(Min,Max)'
            },

            xAxis: {
                type: 'datetime',
                tickInterval: 24 * 3600 * 1000
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                shared: true,
                valueSuffix: '°F',
                xDateFormat: '%A, %b %e'
            },

            legend: {
                enabled: false
            },
            plotOptions:
            {
                series:
                {
                    marker:
                    {
                        enabled: true,
                        fillColor: '#86ccf7'
                    }
                }
            },

            series: [{
                name: 'Temperatures',
                data: graphData,
                lineColor: '#f0a50e',
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, 'rgba(214, 116, 24, 0.5)'], // start
                        [0.7, 'rgba(230, 185, 64, 0.5)'], // start
                        [1, '#86ccf7'] // end
                        
                    ]
                }
            }]

        };
    }


    ngOnInit(): void {

        
        console.log("in ngOnit")
        this.dailyData

        var dateunix, graph1element, graphData
        

        for (let i = 0; i < 15; i++) {
            dateunix = new Date(this.dailyData[i].startTime).valueOf()
            graph1element = [dateunix, this.dailyData[i].values.temperatureMax, this.dailyData[i].values.temperatureMin]

            console.log("element",i, graphData, graph1element)

            if (graphData!=null || graphData!=undefined){
                graphData.push(graph1element)
            }

            else{
                graphData = [graph1element]

            }
            
            
            //graphData = graphData.push(graph1element)
        }
        this.getdata(graphData);
    }

}
