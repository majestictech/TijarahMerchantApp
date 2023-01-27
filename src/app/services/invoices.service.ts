import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
   readonly db_table: string = "vendors";
  VENDORS: Array <any> ;
  constructor(private router: Router, private platform: Platform,private http: HttpClient, private env: EnvService) 
  { } 
  
  vendorSelect(search) {
    return this.http.get(this.env.API_URL+'/vendors/'+this.env.APP_STORE_ID+'?search='+search).pipe(
	  map(results => results['results'])
	);
	
    }
  
    invoicesList(type,page,start,end,search) {
      return this.http.get(this.env.API_URL+'/invoices/'+this.env.APP_STORE_ID+'?type='+type+'&start='+start+'&end='+end+'&page='+page+'&search='+search).pipe(
      map(results => results['results'])
    );
  }
  
  vendorList(type,page,start,end,search) {
    return this.http.get(this.env.API_URL+'/ordervendorlist/'+this.env.APP_STORE_ID+'?type='+type+'&start='+start+'&end='+end+'&page='+page+'&search='+search).pipe(
	  map(results => results['results'])
	);

    }

    editDetailVendor(id) {
      return this.http.get(this.env.API_URL+'/editvendor/'+id).pipe(
      map(results => results['results'])
    );
   }
   
}
