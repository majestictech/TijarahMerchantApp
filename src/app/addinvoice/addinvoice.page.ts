
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
  items = [];
  isItemAvailable = false;
  items_res = [];
  searchText: string = '';
  itemName = false;
  cartTotal: number = 0;
  cartVat: number = 0;
  products = [];
  cartItemCount: BehaviorSubject<number>;
  cartTotalAmount: BehaviorSubject<number>;









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

	getItems(ev: any) 
	{
		console.log('Get items called...');
		this.items = [];
		this.isItemAvailable = false;

		const val = ev.target.value;
		
		if(val == '') {
			this.isItemAvailable = false;
			return;
		}
		
		//console.log(this.items);
		this.items = this.items_res.filter(item => {
			if(item.barCode == null && item.name_ar == null) {
					if(item.name.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.name.toLowerCase().indexOf(' ' + val.toLowerCase()) != -1){
						return item;
					}
				}
				else if(item.barCode != null && item.name_ar == null) {
					if((item.name.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.name.toLowerCase().indexOf(' ' + val.toLowerCase()) != -1) || item.barCode.toLowerCase().indexOf(val.toLowerCase())==0){
						return item;
					}
				}
				else if(item.barCode == null && item.name_ar != null) {
					if((item.name.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.name.toLowerCase().indexOf(' ' + val.toLowerCase()) != -1) || item.name_ar.toLowerCase().indexOf(val.toLowerCase())==0){
						return item;
					}
				}
				else {
					if((item.name.toLowerCase().indexOf(val.toLowerCase()) == 0 || item.name.toLowerCase().indexOf(' ' + val.toLowerCase()) != -1) || item.name_ar.toLowerCase().indexOf(val.toLowerCase())==0 || item.barCode.toLowerCase().indexOf(val.toLowerCase())==0){
						return item;
						console.log("No item found");
					}
				}
		  });
		  
		if(this.items){
			this.isItemAvailable = true;
		}  
		  
	}

	
	calculateCart() {
		this.cartTotal = 0;
		this.cartVat = 0;
		for (let [index, p] of this.cart.entries()) {		  
		  this.cartTotal = this.cartTotal + (p.quantity * p.costPrice);
		  this.cartVat = this.cartVat + (p.costPrice - (p.costPrice/(1+p.tax/100)))*p.quantity;
		}
	}


	addProduct(product) 
	{
		let added = false;
		//this.cartAddProduct = this.cart
		//alert('sdf1');
		for (let p of this.cart) 
		{
		  if (p.id === product.id) 
		  {
			p.quantity += 1;
			added = true;
			this.itemName = true;
			break;
		  }
		}
		if (!added) 
		{	 
		  
		  this.env.alertCheck(JSON.stringify(product));
		  this.cart.unshift(product);
		}	
	
		this.calculateCart();
		this.checkRequired('','');
		
		console.log(this.cart);
		
	}

	getCart() 
	{
		console.log('Cart Items');
		console.log(this.cart);
		return this.cart;
	}
 
	getCartItemCount() 
	{
		return this.cartItemCount;
	}
	addToCart(product) 
	{
		this.addProduct(product);
		this.itemName = true;
		//this.env.sound();
		this.searchText = '';
		
		setTimeout(() => {this.searchbar.setFocus();}, 300);
		//setTimeout(() => {this.keyboard.hide();}, 500);
		this.isItemAvailable = false;
	}

	deleteCartItem(product) 
	{
		//alert("Delete called");
		//this.env.sound();
		this.removeProduct(product);
		this.products = this.getCart();
		//this.productsRefund = this.getCartRefund();
		
		this.calculateCart();
	}

	removeProduct(product) 
	{
		//this.cartTotal = 0;
		//this.cartVat = 0;
		
		for (let [index, p] of this.cart.entries()) {
		  if (p.id === product.id) {
			this.cart.splice(index, 1);			
		  }
		}
		/*
		for (let [index, p] of this.cart.entries()) {
		  this.cartTotal = this.cartTotal + (p.quantity * p.costPrice);
		  this.cartVat = this.cartVat + (p.costPrice - (p.costPrice/(1+p.tax/100)))*p.quantity;
		}
		*/
		this.checkRequired('','');
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
	onChange(product, type, values:any)
	{
		let value = values.target.value;
		
		console.log(this.cart);
		console.log(this.items_res);
		
		//this.cartTotal = 0;
		//this.cartVat = 0;
		for (let [index, p] of this.cart.entries()) {
		  if (p.id === product.id) {
			if(type == 'cp') {
				p.costPrice = parseFloat(value);
			}
			else if(type == 'qty') {
				p.quantity = parseFloat(value);
			}
			else if(type == 'expiryDate') {
				p.expiryDate = value;
			}
		  }
		  
		  /*
		  console.log('costPrice: ' + p.costPrice + ' VAT: ' + p.tax + ' Qty: '+ p.quantity);
		  console.log('VAT: ' + (p.costPrice - (p.costPrice/(1+p.tax/100)))*p.quantity + ' tax: ' + (p.costPrice/(1+p.tax/100)) + ' -- ' + (p.costPrice - (p.costPrice/(1+p.tax/100))));
		  
		  this.cartTotal = this.cartTotal + (p.quantity * p.costPrice);
		  //this.cartVat = this.cartVat + ((p.costPrice * p.tax)/100);
		  this.cartVat = this.cartVat + (p.costPrice - (p.costPrice/(1+p.tax/100)))*p.quantity;
		  */
		}
		
		console.log(this.cart);
		console.log(this.items_res);
		
		this.calculateCart();
	}


	
}
