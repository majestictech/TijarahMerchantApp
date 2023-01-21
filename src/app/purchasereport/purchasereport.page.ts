import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { ReportsService } from '../services/reports.service';
import { Observable } from 'rxjs';
import { EnvService } from '../services/env.service';
@Component({
  selector: 'app-purchasereport',
  templateUrl: './purchasereport.page.html',
  styleUrls: ['./purchasereport.page.scss'],
})
export class PurchasereportPage implements OnInit {
  reportType: string = '';
  startDate: string = '';
  endDate: string = '';
  vendororderlist: Observable<any>;
  currentPage: number = 1;
  totalAmount: number = 0;
  vatAmount: number = 0;
  totalPages : number;
  purchases=[];


  constructor(public env: EnvService,public reportsService:ReportsService) { }

  ngOnInit() {
  }


  loadPurchaseData(type, event){
	if(this.reportType == 'purchasecustom' && (this.startDate == '' || this.endDate == '')) {
		return;
	}
  if(type == 'firstload' || type == 'refresh') {
		this.currentPage = 1;
	
	}
	
	
	this.vendororderlist = this.reportsService.orderVendorList(this.reportType,this.currentPage,this.startDate,this.endDate);
	//this.vendororderlist.subscribe(res => this.bill_res = res['purchasedata']['data']);
	this.vendororderlist.subscribe(res => {
		console.log(res);
    this.env.alertCheck(JSON.stringify(res));
		let data = res['purchasedata']['data'];

			this.vatAmount = res['totalVat'];
			this.totalAmount = res['totalSumAmount'];
			
			//this.totalBills = res['totalBills'];
			console.log(data);
			if(type == 'refresh' || type == 'paging')
				event.target.complete();
			
			this.totalPages = res['purchasedata'].last_page;
			
			for (let i = 0; i < data.length; i++) {
			  this.purchases.push(data[i]);
			  //this.purchases.push(res[i]);
			}
			
			this.currentPage++;
		
		
	  });
  }	

  ionViewWillEnter() {
    this.loadPurchaseData('firstload', '');

    } 

    processDate(e,dateType)
    {
    let value = e.detail.value;
    if(dateType == 'start')
      this.startDate = value;
    else if(dateType == 'end')
      this.endDate = value;
      
      console.log(this.startDate);
      console.log(this.endDate);
    }

    selectType() {
      this.purchases = [];
      this.loadPurchaseData('firstload', '');
    
      console.log(this.endDate);
      console.log(this.startDate);
      
      }


	ionViewDidEnter() {
    this.vendororderlist = this.reportsService.orderVendorList(this.reportType,this.currentPage,this.startDate,this.endDate);
	//this.vendororderlist.subscribe(res => this.bill_res = res['purchasedata']['data']);
	this.vendororderlist.subscribe(res => {
		console.log(res);
    this.env.alertCheck(JSON.stringify(res));
		  let data = res['purchasedata']['data'];
			let vatAmount = res['totalVat'];
			let totalAmount = res['totalSumAmount'];

      vatAmount.toString();
      totalAmount.toString();
      data.toString();

	// Generate the chart
        HighCharts.chart('salesChart', {
          chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories:data
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
          data: vatAmount,
		  color: 'black'
        },
        {
          name: 'Total Amount',
          type: undefined,
          data: totalAmount,
		  color: '#006C35'
        }]
        });	
      })   
 }
}
