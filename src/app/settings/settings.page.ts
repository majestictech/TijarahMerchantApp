import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { NgForm } from '@angular/forms';
import { HttpClient  } from '@angular/common/http';
import { TranslateConfigService } from '../services/translate-config.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedLanguage:string= '';

  detectLang:any="";
  constructor(public env: EnvService,private http: HttpClient, private translateConfigService: TranslateConfigService) { }

  ngOnInit() {
  }
  
  async majEditShop(form: NgForm){
	this.http.post<any>(this.env.API_URL + '/updateshop', {id:this.env.APP_STORE_ID, defaultLang:form.value.defaultLang}).subscribe(data => {
		console.log(data);
		console.log('data');
	})
  }

}
