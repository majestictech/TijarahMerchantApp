import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { Observable } from 'rxjs';
import { ReportsService } from '../services/reports.service';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-mediareport',
  templateUrl: './mediareport.page.html',
  styleUrls: ['./mediareport.page.scss'],
})
export class MediareportPage implements OnInit {
	reportsdata: Observable<any>;
	startDate: string = '';
	endDate: string = '';
	cashAmount = 0;
	cardAmount = 0;
	otherAmount = 0;
	cashCount = 0;
	cardCount = 0;
	otherCount = 0;
	multipleCount = 0;
	multipleAmount = 0;
	refundAmount = 0;
	refundCount = 0;
	salesCount = 0;


  constructor(public env: EnvService, public reportsService:ReportsService) { }

  ngOnInit() {
  }
  
loadData() {

	this.reportsdata = this.reportsService.mediaReport(this.startDate,this.endDate);

this.reportsdata.subscribe(res => {
	//alert(JSON.stringify(res));
	this.refundCount = res['refundCount'];
		this.cashCount = res['cashCount'];
		this.cardCount = res['cardCount'];
		this.otherCount = res['otherCount'];
		this.multipleCount = res['multipleCount'];
		
		this.cashAmount = res['cashAmount'];
		this.cardAmount = res['cardAmount'];
		this.otherAmount = res['otherAmount'];
		this.multipleAmount = res['multipleAmount'];
		this.refundAmount = res['refundAmount'];
		this.salesCount = res['salesCount'];
	alert(123);	
	alert(this.cardAmount);	
	this.loadGraph();
})
}

ionViewWillEnter() {
	//this.loadData();
	//alert(123);	
	//alert(this.otherAmount);	
  }


  ionViewDidEnter() {
	this.loadData();
  }
  
	loadGraph() {
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
					  name: 'CASH',
					  y: this.cashAmount,
					  color:'#000',
					  sliced: true,
					  selected: true
					}, {
					  name: 'CARD',
					  y: this.cardAmount,
					  color:'#006c35'
					},  {
					  name: 'OTHER',
					  y: this.otherAmount,
					  color:'#8d948d'
					  
					}]
				}]	
		  
	
		});
	}


	selectType() {
	this.cashCount = 0;
	this.cardCount = 0;
	this.otherCount = 0;
	
	this.cashAmount = 0;
	this.cardAmount = 0;
	this.otherAmount = 0;
	
	this.loadData();
	  }
	  
	  processDate(e,dateType)
	  {
		let value = e.detail.value;
		if(dateType == 'start')
			this.startDate = value;
		else if(dateType == 'end')
			this.endDate = value;
	  }
}
