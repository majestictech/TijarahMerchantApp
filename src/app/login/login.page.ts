import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, Platform } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EnvService } from '../services/env.service';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  message: string = "";	
  @ViewChild('showHidePassword', { static: false }) passwordInput: IonInput;
  constructor(private translateConfigService: TranslateConfigService, private platform: Platform, private http: HttpClient, public router: Router, public env: EnvService) { }

  ngOnInit() {
    if(this.env.NETWORK_STATUS != "Online") {
		// Internet Not Available
		this.message = "Internet connection required for login.";
	}
  }
  ionViewWillLeave() 
  {
	
  }
  
  toggleShow() 
  {
	this.showPassword = !this.showPassword;
	this.passwordInput.type = this.showPassword ? 'text' : 'password';
  }
  login(form: NgForm) {
	  //alert('I am called...');
	  //http://192.168.1.21/retailb2b/api/ajax_login
	  
	  //this.showAutoHideLoader();
	  
	  this.http.post<any>(this.env.API_URL + '/ajax_loginecr', {contactNumber:form.value.contactNumber, password:  form.value.password}).subscribe(logindata => {
		//this.postId = data.id;
		console.log(logindata);
		console.log(logindata['success']);
		console.log(logindata['logindata']);
		
		if(logindata['success'] == true) {
			console.log(logindata['stores'].storeId);
			console.log(logindata['logindata'].userId);
			console.log(logindata['logindata'].firstName);
			console.log(logindata);
			
			this.env.APP_STORE_ID = logindata['stores'].storeId;
			this.env.APP_USER_ID = logindata['logindata'].userId;
			this.env.PHONE_NUMBER = logindata['logindata'].contactNumber;
			this.env.display_name = logindata['logindata'].firstName + ' ' +  logindata['logindata'].lastName;
			this.env.STORE_NAME = logindata['stores'].storeName;
			this.env.USER_ROLE = logindata['logindata'].userrole;
			this.env.APP_LANG = logindata['logindata'].defaultLang;
			this.env.presentToast("Login Successful");
			this.translateConfigService.setLanguage(this.env.APP_LANG);
			alert(this.env.APP_STORE_ID);
			alert("this.env.APP_STORE_ID");
			//this.hideLoader();
			this.router.navigate(['/home']);
		}
		else {
			// Login Failed
			//this.hideLoader();
			this.env.presentToast("Invalid Username and/or Password");
		}
	})
  }

}
