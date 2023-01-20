import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  //public storage: SQLite;
  items_res = [];
  constructor(private http: HttpClient, private env: EnvService,private platform: Platform) 
  { 

  }
  

	getListProducts(): Observable<any> {
		return this.http.get(this.env.API_URL+'/listproducts').pipe(
			map(result => result['results'])
			
		);
	}
	getStockReason(): Observable<any> {
		return this.http.get(this.env.API_URL+'/listproducts').pipe(
			map(result => result['results'])
			
		);
	}

}
