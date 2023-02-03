import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../services/invoices.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.page.html',
  styleUrls: ['./invoicedetail.page.scss'],
})
export class InvoicedetailPage implements OnInit {
orderDetails = [];
vendorDetails = [];
invoiceData: Observable<any>;
id: string = '';
vendorName: string = '';
vendorContact: string = '';
vendorVat: string = '';
cartLength: number = 0;
cartQty: number = 0;
cartTotal: number = 0;
vatAmount: number = 0;

  constructor(private invoicesService: InvoicesService,private route: ActivatedRoute, public env: EnvService) 
  { 
	//alert('a');
	this.id = this.route.snapshot.paramMap.get('id');
	this.invoiceData = this.invoicesService.invoiceDetails(this.id);
	this.invoiceData.subscribe(res => {
		console.log(res)
		/*let count = res.orderDetail.length();
		console.log(count);*/
		this.orderDetails = JSON.parse(res.orderDetail);
		this.vendorDetails = JSON.parse(res.vendorDetail);
		
		this.vatAmount = res.vatAmount;
		this.cartTotal = res.totalAmount;
		this.env.alertCheck(JSON.stringify(res));
		if(this.vendorDetails.length != 0) {
			this.vendorName = this.vendorDetails['vendorName'];
			this.vendorContact = this.vendorDetails['contactNumber'];
			this.vendorVat = this.vendorDetails['VatNumber'];
		}
		
		this.cartLength = this.orderDetails.length;
		
		console.log(this.orderDetails);
		
		for (var i = 0; i < this.orderDetails.length; i++) {
            this.cartQty = this.cartQty + parseInt(this.orderDetails[i]['quantity']);
			
			console.log("orderDetails");
			console.log(this.orderDetails);
			console.log(this.orderDetails[i]['quantity']);
        }

	}
	);
  }
  

  ngOnInit() {
  }

	async ionViewDidEnter() {
    this.env.alertCheck(this.vendorName);
    this.env.alertCheck(this.vatAmount );
    this.env.alertCheck('this.vendorName');
	this.env.hideLoader();
	}

}
