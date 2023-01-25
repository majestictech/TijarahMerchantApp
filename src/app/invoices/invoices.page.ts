import { TranslateService } from '@ngx-translate/core';
import { InvoicesService } from '../services/invoices.service';
import { EnvService } from '../services/env.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar, IonInput } from '@ionic/angular';
import { HttpClient  } from '@angular/common/http';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
	invoices_res = [];
	startDate: string = '';
    endDate: string = '';
	statusinvoice: string = 'All';
	currentPage: number = 1;
    totalPages : number;
    dataLoading: string = 'Loading Data...';
    previousTab: string = 'All';
    selectedTab: string = 'All'
    btnDisabled = false;
    items = [];
    dataReturned: any;
    invoices = [];
    invoiceres = [];
      fromDate: string = '';
      toDate: string = '';
    totalVat: number = 0;
    totalSumAmount: number = 0;
    invoiceCount: number = 0;
    isInvoiceAvailable = false;
    invoicelist: Observable<any>;
    searchText: string = '';





  constructor(translate: TranslateService,private http: HttpClient,public env: EnvService,private router: Router,private invoicesService: InvoicesService) {
    this.loadData('firstload', '');
   }

  ngOnInit() {
  }
  loadData(type,event){
    this.btnDisabled = true;
		/*
		if(this.statusinvoice == 'invoicecustom' && (this.startDate == '' || this.endDate == '')) {
		return;
		}
		*/
		if(type == 'firstload' || type == 'refresh') {
			this.currentPage = 1;
			this.dataLoading = 'Loading Data...';
			this.invoices = [];
		}
		this.invoicelist = this.invoicesService.invoicesList(this.statusinvoice,this.currentPage,this.startDate,this.endDate,this.searchText);
		this.invoicelist.subscribe(res => this.invoices_res = res['invoicedata']['data']);
		console.log(this.invoices_res);
		
		this.invoicelist.subscribe(res => {
			console.log(res);
			
			this.fromDate = res['fromDate'];
			this.toDate = res['toDate'];
			
			let data = res['invoicedata']['data'];
			this.invoiceCount = data.length;
			console.log(this.invoiceCount);
			if(data.length == 0) {
				this.dataLoading = 'No Data Found';
			}
			else {
				this.totalVat = res['totalVat'];
				this.totalSumAmount = res['totalSumAmount'];
				if(type == 'refresh' || type == 'paging')
					event.target.complete();
				
				this.totalPages = res['invoicedata'].last_page;
				
				if(data.length == 0) {
					this.dataLoading = 'No Data Found';
				}
				
				for (let i = 0; i < data.length; i++) {
				  this.invoices.push(data[i]);
				}
				
				this.currentPage++;
				
			}
			this.invoiceres = this.invoices;
			
			this.btnDisabled = false;
		});
  }
  switchTab(tabValue) 
  {
	//this.env.sound();
	console.log('selectedTab:: ' + this.selectedTab + ' previousTab:: ' + this.previousTab)
	this.previousTab = this.selectedTab;
	console.log('selectedTab:: ' + this.selectedTab + ' previousTab:: ' + this.previousTab)
	this.selectedTab = tabValue;
	console.log(this.statusinvoice);
	this.statusinvoice = tabValue;
	console.log(this.statusinvoice);
	console.log(tabValue);
	
	if(tabValue == 'invoicecustom') {
		return;
	}
	
	this.loadData('firstload', '');
  }

  ionViewDidEnter()
  {
	  this.loadData('firstload', '');
	  this.env.hideLoader();
  }

  getItems(ev: any) {
    const val = ev.target.value;
    
    this.searchText = val;
    this.loadData('firstload', '');
    }


}
