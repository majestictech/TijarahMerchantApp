import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class EnvService {
  APP_LANG = 'en';
  APP_STORE_ID : any = null;
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

  APP_DEBUG = true;

  constructor(private toastController: ToastController) { }
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
}
