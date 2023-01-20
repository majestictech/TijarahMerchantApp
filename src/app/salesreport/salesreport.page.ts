import { Component, OnInit } from '@angular/core';

import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.page.html',
  styleUrls: ['./salesreport.page.scss'],
})
export class SalesreportPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public async ionViewDidEnter() {
	console.log('Loading Graph...');
	await this.loadGraph();
	
	//setTimeout(() => {this.loadGraph();}, 2000);
  }
  
  ionViewDidLoad() {
	//this.loadGraph();
  }
  
  loadGraph() {
	// Generate the chart
	HighCharts.chart('salesChart', {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Total Bills'
		},
		subtitle: {
			text: ''
		},
		plotOptions: {
			column: {
				depth: 10
			}
		},
		xAxis: {
			categories: [
				  'Chips',
				  'Dates',
				  'Edible Oil',
				  'Chocolate',
				  'Detergent',
				  'Pulses'
				],
			labels: {
				skew3d: true,
				style: {
					fontSize: '16px'
				}
			}
		},
		yAxis: {
			title: {
				text: 'Units'
			}
		},
		series: [{
			type: undefined,
			name: 'Sales by Product Type',
			data: [149.9, 271.5, 106.4, 129.2, 144.0, 176.0],
			colorByPoint: true
		}]
	});
	
	console.log('Graph Loaded');
  }
}
