import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Platform, LoadingController } from '@ionic/angular';

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

  APP_DEBUG = false;
  inputTap = 0;




  constructor(private toastController: ToastController,private loadingController: LoadingController, public router: Router) { }
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
      currentDate() {
        let today = new Date();
        
        // For AST TimeZone
        let utcTimeDifference = today.getTimezoneOffset();
        // Above will give difference like -120 means 120 minutes or 2 hour so it is GMT + 2 hours
        // -330 means GMT + 5:30
        
        // UTC is in negative so we are adding 300 for AST as ast is GMT + 3
        utcTimeDifference = utcTimeDifference + 180;
        
        // we are adding as above value is in negative
        today.setMinutes( today.getMinutes() + utcTimeDifference );
        // For AST TimeZone
        
        let current_date = today.getFullYear()+'-'+this.number2digits(today.getMonth()+1)+'-'+this.number2digits(today.getDate());
        //let time = this.number2digits(today.getHours()) + ":" + this.number2digits(today.getMinutes()) + ":" + this.number2digits(today.getSeconds());
        //let current_datetime = date+' '+time;
        
        return current_date;
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
  
    languageParseContactNumber(arnum) {
      if(this.APP_LANG == 'en') {
        return arnum;
      }
      else if(this.APP_LANG == 'ar') {
        arnum = Intl.NumberFormat('ar-EG').format(arnum)
        for (var i = 0; i < arnum.length; i++) {
          if(arnum.charAt(i) == '٬'){
            arnum = arnum.replace( '٬', '' );	
            }
          }
        console.log(arnum);	
        return arnum;
      }
      }
      convertNumberAr2En(arnum){
        if(this.APP_LANG == 'ar') {
          for (var i = 0; i < arnum.length; i++) {
            console.log(arnum.charAt(i));
      
            if(arnum.charAt(i) == '٬'){
             arnum =arnum.replace( /٬/g, '' );
            }
            
            if(arnum.charAt(i) == '٠'){
             arnum =arnum.replace( /٠/g, '0' );
            }
      
            if(arnum.charAt(i) == '١'){
             arnum =arnum.replace( /١/g, '1' )  
            }
      
            if(arnum.charAt(i) == '٢'){
             arnum =arnum.replace( /٢/g, '2' )	
            }
      
            if(arnum.charAt(i) == '٣'){
             arnum =arnum.replace( /٣/g, '3' )	
            }
      
            if(arnum.charAt(i) == '٤'){
             arnum =arnum.replace( /٤/g, '4' )	
            }
      
            if(arnum.charAt(i) == '٥'){
             arnum =arnum.replace( /٥/g, '5' )	
            }
      
            if(arnum.charAt(i) == '٦'){
             arnum =arnum.replace( /٦/g, '6' )	
            }
      
            if(arnum.charAt(i) == '٧'){
             arnum =arnum.replace( /٧/g, '7' )	
            }
      
            if(arnum.charAt(i) == '٨'){
             arnum =arnum.replace( /٨/g, '8' )	
            }
      
            if(arnum.charAt(i) == '٩'){
             arnum =arnum.replace( /٩/g, '9' )	
            }	  	  
          }
        }
        
        return arnum;
        } 


        numberOnlyValidation(event: any, type='phone', limit=0) 
        {
        let pattern = /[0-9]/;
        let maxLength = 8; // One less than the desired limit.
        
        if(type == 'phone') {
          pattern = /[0-9]/;
        }
        else if(type == 'price') {
          //pattern = /[0-9.,]/;
          //pattern = /^[0-9]*(\.[0-9]{0,2})?$/;
          pattern = /^[0-9]*(\.[0-9]{0,2})?$/;
        }
        else if(type == 'vat') {
          pattern = /^[0-9]*(\.[0-9]{0,2})?$/;
          maxLength = 14; // One less than the desired limit.
        }
        else if(type == 'qty') {
          pattern = /^[0-9]*(\.[0-9]{0,2})?$/;
          if(limit > 0)
            maxLength = limit;
        }
        else if(type == 'name') {
          pattern = /[a-zA-Z]+/g;
        }
        
        let inputChar = String.fromCharCode(event.charCode);
        
        //this.env.alertCheck(inputChar.length);
        console.log('Length');
        console.log(event.target.value);
        console.log(event.target.value.length);
        
        if (!pattern.test(inputChar) || event.target.value.length > maxLength) {
          // invalid character, prevent input
          event.preventDefault();
        }
        }
        number2digits(num)
        {
          let numFinal = (num < 10 ? '0' : '') + num;
          return numFinal;
        }
      
    
        logout(){
          localStorage.removeItem('userId');
          localStorage.removeItem('storeId');
          this.router.navigate(['/login']);
        }

}
