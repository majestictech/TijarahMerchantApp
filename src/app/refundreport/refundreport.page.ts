import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';


@Component({
  selector: 'app-refundreport',
  templateUrl: './refundreport.page.html',
  styleUrls: ['./refundreport.page.scss'],
})
export class RefundreportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	ionViewDidEnter() {
	// Generate the chart
        HighCharts.chart('salesChart', {
		  chart: {
        type: 'column'
      },
      title: {
        text: 'Refund Report'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'March', 'April', 'May'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Refund Amount',
          align: 'low'
        },
      },
      tooltip: {
        valueSuffix: 'Dollars'
      },
      plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
      },
      series: [{
        type: undefined,
        name: 'Cashier1',
        data: [6, 7, 8, 9, 10],
		color: '#006C35'
      }, {
        type: undefined,
        name: 'Cashier2',
        data: [5, 7, 3, 8, 5],
		color: '#000'
      }]
    });
  }

  
	
}







	