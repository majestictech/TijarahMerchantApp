import { InvoicesService } from '../services/invoices.service';
import { EnvService } from '../services/env.service';
import { Observable } from 'rxjs';
import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.page.html',
  styleUrls: ['./vendorlist.page.scss'],
})
export class VendorlistPage implements OnInit {
	vendororderlist: Observable<any>;
	vendorCount: number = 0;
	searchText: string = '';
  
  @ViewChild('searchVendors', { static: false }) searchbar: IonSearchbar;

  constructor(public env: EnvService,private invoicesService: InvoicesService) { }

  ngOnInit() {
  }
  loadData() 
	{
		this.vendororderlist = this.invoicesService.vendorSelect(this.searchText);
		this.vendororderlist.subscribe(res => {
			console.log(res);		
			this.vendorCount = res.length;
			
		});
	}

  doRefresh(event) {
		this.loadData();
		event.target.complete();
	}
	
	ionViewWillEnter() {
		this.loadData();
  }
  
  async ionViewDidEnter() {
	this.env.hideLoader();
  }

  getItems(ev: any) {
	const val = ev.target.value;
	
	this.searchText = val;
	this.loadData();
  }
}
