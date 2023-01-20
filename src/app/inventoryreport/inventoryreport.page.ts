import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-inventoryreport',
  templateUrl: './inventoryreport.page.html',
  styleUrls: ['./inventoryreport.page.scss'],
})
export class InventoryreportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

ionViewDidEnter() {
	// Generate the chart
	HighCharts.chart('salesChart', {
		chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
		},
		title: {
        text: 'Inventory Report'
		},
		tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
        pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
		},
		series: [{
        name: 'Products Available',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Products Out of Stock',
          y: 11.84,
          sliced: true,
          selected: true,
		  color: '#000'
        },{
          name: 'Products Available',
          y: 84.11,
		  color: '#006C35'
        } ]
      }]
			
	});
}
}