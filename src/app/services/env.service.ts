import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Platform, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  APP_LANG = 'en';
  APP_STORE_ID : any = 505;
  APP_SETUP = false;
  APP_USER_ID = null;
  //APP_USER_ID = '87';
  current_user = null;
  display_name = null;
  PHONE_NUMBER = null;
  STORE_NAME = null;
  USER_ROLE = null;
  NETWORK_STATUS = 'Online';
  //API_URL = 'https://majestictechnosoft.com/retailb2b/api';
  API_URL = 'http://192.168.1.22/retailb2b/api';

  APP_DEBUG = false;
  inputTap = 0;




  constructor(private toastController: ToastController,private loadingController: LoadingController,) { }
   async presentToast(text) 
  {
	const toast = await this.toastController.create({
		message: text,
		position: 'bottom',
		duration: 2000
	});
	toast.present();
  }
  alertCheck(msg) {
    if(this.APP_DEBUG)
      alert(msg);
    }

    tapEvent(ev: any, msg) {
      if(ev.target.value == '')
        return;
      
      this.inputTap++;
    
      if(this.inputTap <= 2) {
        // value 2 means click
        // onfocus value becomes 1 then same time click also called so it becomes 2
        ev.target.select();
      }
      }


 blurEvent(ev: any, msg) {
	  this.inputTap = 0;
  }

  languageParseNumbers(number) {
    if(this.APP_LANG == 'en') {
      return number;
    }
    else if(this.APP_LANG == 'ar') {
      //return Intl.NumberFormat('ar-EG').format(number);
      return number;
    }
    } 
    hideLoader() {
      this.loadingController.dismiss();
    }
  
}
