import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(public router: Router, public env: EnvService, private translateConfigService: TranslateConfigService, private platform: Platform,translate: TranslateService) {
    this.platform.ready().then(() => {
		console.clear();
		console.log('I am called');
		//if(this.env.APP_USER_ID == null || this.env.APP_USER_ID == '')
			//this.router.navigate(['/login']);
	  });
  }
}
