import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnvService } from '../services/env.service';

import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-vatreport',
  templateUrl: './vatreport.page.html',
  styleUrls: ['./vatreport.page.scss'],
})
export class VatreportPage implements OnInit {
	constructor(private route: ActivatedRoute, public env: EnvService) {
		this.env.APP_USER_ID = this.route.snapshot.paramMap.get('userId');
	}

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
        text: ''
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
			name: 'Brands',
			colorByPoint: true,
			type: undefined,
			data: [{
			  name: 'VAT on Purchase',
			  y: 2178.00,
			  color:'#000',
			  sliced: true,
			  selected: true
			}, {
			  name: 'Total Sales (Incl. of VAT)',
			  y: 12338.00,
			  color:'#006c35'
			}, {
			  name: 'VAT on Sales',
			  y: 1567.92,
			  color:'#727875'
			}, {
			  name: 'NET VAT Due',
			  y: 608.25,
			  color:'#aed188'
			}]
		}]	
	});
}

}
