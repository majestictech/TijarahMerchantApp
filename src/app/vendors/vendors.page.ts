import { Component, OnInit,ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { InvoicesService } from '../services/invoices.service';
import { Observable } from 'rxjs';
import { IonSearchbar } from '@ionic/angular';
import { EnvService } from '../services/env.service';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {
  vendororderlist: Observable<any>;
	vendors = [];
	vendors_res = [];
	vendorCount: number = 0;
	currentPage: number = 1;
	totalPages : number;
	dataLoading: string = 'Loading Data...';
	startDate: string = '';
	endDate: string = '';
	fromDate: string = '';
	toDate: string = '';
	statusvendor: string = '';
	totalVat: number = 0;
	totalSumAmount: number = 0;
	searchText: string = '';








  @ViewChild('searchVendors', { static: false }) searchbar: IonSearchbar;

  constructor(translate: TranslateService,private invoicesService: InvoicesService,public env: EnvService) { }

  ngOnInit() {
  }
  loadData(type,event)
  {
   if(this.statusvendor == 'vendorwisecustom' && (this.startDate == '' || this.endDate == '')) {
   return;
   }
   if(type == 'firstload' || type == 'refresh') {
     this.currentPage = 1;
     this.dataLoading = 'Loading Data...';
     this.vendors = [];
   }
   this.vendororderlist = this.invoicesService.vendorList(this.statusvendor,this.currentPage,this.startDate,this.endDate,this.searchText);
   this.vendororderlist.subscribe(res => this.vendors_res = res['vendordata']['data']);
   console.log(this.vendors_res);
   
   
   this.vendororderlist.subscribe(res => {
     console.log(res);
     this.startDate = res['fromDate'];
     this.endDate = res['toDate'];
     this.fromDate = res['fromDate'];
     this.toDate = res['toDate'];
     
     let data = res['vendordata']['data'];
     this.vendorCount = data.length;
     if(data.length == 0) {
       this.dataLoading = 'No Data Found';
       this.totalVat = 0;
       this.totalSumAmount = 0;
       
     }
     else {
       if(type == 'refresh' || type == 'paging')
         event.target.complete();
       
       this.totalVat = res['totalVat'];
       this.totalSumAmount = res['totalSumAmount'];
       
       this.totalPages = res['vendordata'].last_page;
       
       if(data.length == 0) {
         this.dataLoading = 'No Data Found';
       }
       
       for (let i = 0; i < data.length; i++) {
         this.vendors.push(data[i]);
       }
       
       this.currentPage++;
     }
   });
  }

  ionViewWillEnter() {
	
    this.loadData('firstload', '');
    }
    
    getItems(ev: any) {
    const val = ev.target.value;
    
    this.searchText = val;
    this.loadData('firstload', '');
    }

    selectType(checkType) {
      //this.env.sound();
      this.statusvendor = checkType;
      if(checkType == 'vendorwisecustom' && (this.startDate == '' || this.endDate == '')) {
        return;
      }
      this.vendors = [];
      this.loadData('firstload', '');
      }







}
