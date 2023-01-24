import { Component } from '@angular/core';
import { EnvService } from './services/env.service';
import { TranslateConfigService } from './services/translate-config.service';
import { Platform, AlertController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectedLanguage: string;
  
  constructor(public env: EnvService, private translateConfigService: TranslateConfigService, private platform: Platform,translate: TranslateService) {
    translate.setDefaultLang('en');
	this.platform.ready().then(() => {		
		//alert(this.env.APP_LANG);
		//this.translateConfigService.setLanguage(this.env.APP_LANG);
		
		
		//this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

	  });
  }
}
