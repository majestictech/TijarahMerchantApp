import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-cashierreport',
  templateUrl: './cashierreport.page.html',
  styleUrls: ['./cashierreport.page.scss'],
})
export class CashierreportPage implements OnInit {

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
        text: ''
      },
      xAxis: {
        categories: ['Cashier1', 'Cashier2', 'Cashier3']
      },
      yAxis: {
        title: {
          text: 'Collection'
        }
      },
      series: [
        {
          name: 'Vat Amount',
          type: undefined,
          data: [1, 3, 4],
		color: '#000'
        },
        {
          name: 'Total Amount',
          type: undefined,
          data: [5, 7, 8],
		    color: '#006C35'
        }]
        });
	}
}
