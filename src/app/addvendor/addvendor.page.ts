import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";


@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.page.html',
  styleUrls: ['./addvendor.page.scss'],
})
export class AddvendorPage implements OnInit {
vendorName: string = '';
email: string = '';
contactNumber: string = '';
VatNumber: string = '';
storeId:any;
requiredFields: boolean = false;
  constructor(private http: HttpClient, public env: EnvService,private router: Router,private location: Location) { }

  ngOnInit() {  }
  submitForm() 
  {
  this.location.back();  
  }
  cancel()
  {
	this.router.navigate(['/vendors']);
  }
  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  async ionViewDidEnter() {	this.env.hideLoader();  }
  
  
  
  
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
  majCreateVendor(form: NgForm)
  {
		//console.log(this.name);
		//this.env.sound();
		this.http.post<any>(this.env.API_URL + '/addvendor', {vendorName:form.value.vendorName,contactNumber:form.value.contactNumber,VatNumber:form.value.VatNumber,storeId: this.env.APP_STORE_ID}).subscribe(data => {
			console.log(data);
				if(data['status'] == 'duplicate' )
				{
					this.env.presentToast('MESSAGES.vendorexitnamenumber');
				}
				else {
					console.log(data);	
					this.location.back();
					//this.router.navigate(['/vendors']);
				}
		})
	}

}