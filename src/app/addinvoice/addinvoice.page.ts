
import { HttpClient  } from '@angular/common/http';
import { InvoicesService } from '../services/invoices.service';
import { EnvService } from '../services/env.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { InventoryService } from '../services/inventory.service';
import { IonSearchbar } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
//import { CreateinvoicePage } from '../modals/createinvoice/createinvoice.page';
@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.page.html',
  styleUrls: ['./addinvoice.page.scss'],
})
export class AddinvoicePage implements OnInit {
  @ViewChild('autofocus', { static: false }) searchbar: IonSearchbar;
  vendors_res: Observable<any>;
  isVendorAvailable = false;
  vendors = [];
  vendor = [];
  isShown: boolean = false;
  vendorId: any = true;
  assignedVendor: string = 'none';
  vendordata: Observable<any>;
  invoiceNumber: string = '';
  invoiceDate: any = '';
  quantity: any = true;
  requiredFields: boolean = false;
  invoiceSaveBtnenabled = false;
  cart = [];
  maxDate: any = true;


  constructor(private http: HttpClient,  public env: EnvService,private router: Router,private invoicesService: InvoicesService, private inventoryService: InventoryService, public modalController: ModalController) { }

  ngOnInit() {
  }
  getVendors(ev: any) 
	{
		
		let searchText = ev.target.value;
		
		if(searchText == '') {
			this.isVendorAvailable = false;
			return;
		}
		
		this.vendors_res = this.invoicesService.vendorSelect(searchText);
		
		this.vendors_res.subscribe(res => {
			console.log(res);		
			this.vendors = res;
      this.env.alertCheck(JSON.stringify(res));
			console.log(res.length);
		});
		
		this.isVendorAvailable = true;
		
		console.log(this.vendors.length);
		console.log(this.vendors);
	}

  checkFocus(){
    this.isShown = true;
}

checkBlur(){
    this.isShown = false;
//this.isVendorAvailable = false;
}

addVendor(vendor) 
{
this.vendor = vendor;
this.isVendorAvailable = false;
this.vendorId = vendor.id;
this.assignedVendor = vendor.vendorName;
this.env.presentToast('MESSAGES.vendorassigninvoice');

}
loadData(){}

ionViewWillEnter() 
	{
		//this.products = this.getCart();
		//this.productsRefund = this.getCartRefund();
		//this.cartItemCount = this.getCartItemCount();
		this.vendordata = this.invoicesService.vendorSelect(this.env.APP_STORE_ID);
		this.vendordata.subscribe(res => this.vendors_res = res);
		setTimeout(() => {this.searchbar.setFocus();}, 300);
		//setTimeout(() => {this.keyboard.hide();}, 500);
    this.loadData()
	}

	checkRequired(ev: any, type) 
	{
	
		console.log('Value Is: ');
		//console.log(ev.target.value);
		
		if(type == "vendorId")
			this.vendorId = ev.target.value;	
		else if(type == "invoiceNumber")
			this.invoiceNumber = ev.target.value;
		else if(type == "invoiceDate")
			this.invoiceDate = ev.target.value;	
		else if(type == "quantity")
			this.quantity = ev.target.value;

		
		if(this.vendorId != '' && this.invoiceNumber != '' && this.invoiceDate != '' && this.quantity !='' && this.quantity != 0 && this.cart.length > 0)
			{
			this.requiredFields = true;
			this.invoiceSaveBtnenabled = true ;
			}
		else {
			this.requiredFields = false;
			this.invoiceSaveBtnenabled = false ;
		}
	}



  clearVendor() 
	{
		//this.env.sound();
		this.assignedVendor = 'none';
		this.vendor = [];	

		this.env.presentToast('MESSAGES.vendorremoveinvoice');
		/* if(this.env.APP_LANG == 'en')
		{
			this.env.presentToast(this.env.VENDOR_REMOVED_EN);
		}
		else if(this.env.APP_LANG == 'ar')
		{
			this.env.presentToast(this.env.VENDOR_REMOVED_AR);
		} */

	}

}
