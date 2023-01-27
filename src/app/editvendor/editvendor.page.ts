import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EnvService } from '../services/env.service';
import { HttpClient  } from '@angular/common/http';
import { InvoicesService } from '../services/invoices.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.page.html',
  styleUrls: ['./editvendor.page.scss'],
})
export class EditvendorPage implements OnInit {
  id:string='';
  vendordata: Observable<any>;
  vendorName: string = '';
  contactNumber: string = '';
  VatNumber: string = '';
  requiredFields: boolean = false;

  constructor(private http: HttpClient, public env: EnvService,private router: Router,private invoicesService: InvoicesService,private route: ActivatedRoute) {
	this.id = this.route.snapshot.paramMap.get('id');
	this.vendordata = this.invoicesService.editDetailVendor(this.id);
	this.vendordata.subscribe(res => console.log(res));
	this.vendordata.subscribe(res => {
		this.vendorName = res.vendorName;
		this.contactNumber = (res.contactNumber);
		this.VatNumber = env.languageParseNumbers(res.VatNumber);
	});
  }

  ngOnInit() {
  }
  cancel()
  {
	this.router.navigate(['/vendorlist']);
  }
  checkRequired(ev: any, type) 
  {
	
	console.log('Value Is: ');
	console.log(ev.target.value);
	
	if(type == "vendorName")
		this.vendorName = ev.target.value;
	else if(type == "contactNumber")
		this.contactNumber = ev.target.value;
	else if(type == "VatNumber")
		this.VatNumber = ev.target.value;

	if(this.vendorName != '' && this.contactNumber != '' && this.VatNumber != '' && this.contactNumber.length == 9 && this.VatNumber.length <= 20)
		this.requiredFields = true;
	else
		this.requiredFields = false;
  }
  async majEditVendor(form: NgForm){
	// this.env.sound();
	
	let contactNumberEn = await (form.value.contactNumber);
	
	let VatNumberEn = await (form.value.VatNumber);
	
	this.http.post<any>(this.env.API_URL + '/updatevendor', {id:this.id, vendorName:this.vendorName, contactNumber:contactNumberEn, VatNumber:VatNumberEn}).subscribe(data => {
		//console.log(data);
		//this.cart.push(this.cart);
		if(data['status'] == 'duplicate')
				this.env.presentToast('MESSAGES.vendorexitnamenumber');
		else 
		{
			console.log(form.value.contactNumber);
			this.router.navigate(['/vendorlist']);
		}
	})
	}

}
