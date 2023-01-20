import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from '../services/env.service';
import { TranslateConfigService } from '../services/translate-config.service';

import * as HighCharts from 'highcharts';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public env: EnvService, private translateConfigService: TranslateConfigService) {
	this.translateConfigService.setLanguage(this.env.APP_LANG);
	  if(this.env.APP_USER_ID == null || this.env.APP_USER_ID == '')
		this.router.navigate(['/login']);
  }
  
  ngOnInit() {
	  
  }
  
  ionViewDidEnter() {
	// Generate the chart
	HighCharts.chart('salesChart', {
	   chart: {
			type: 'column'
		},
		title: {
			text: 'Total Sales'
		},
		subtitle: {
			text: ''
		},
		plotOptions: {
			column: {
				depth: 25
			}
		},
		xAxis: {
			categories: [
				  'Soap',
				  'Sampoo',
				  'Oil',
				  'FaceCream',
				  'conditioner',
				  'FashWash'
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
				text: null
			}
		},
		series: [{
			type: undefined,
			name: 'Sales',
			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
			colorByPoint: true
		}]
	});
  }
}
