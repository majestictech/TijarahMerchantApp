import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EnvService } from '../services/env.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translate: TranslateService, public env: EnvService) { }
  getDefaultLanguage(){
	let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }
  
  setLanguage(setLang) 
  {
	this.translate.use(setLang);
	if (setLang === 'en') {
		document.documentElement.dir = "ltr";
		this.env.APP_LANG = 'en';
	} 
	else {
		document.documentElement.dir = "rtl";
		this.env.APP_LANG = 'ar'; 
	}
  }
  
}