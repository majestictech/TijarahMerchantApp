import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { EnvService } from '../services/env.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  expiryDataEdit(id: any): any {
    throw new Error('Method not implemented.');
  }
  
constructor(private router: Router,private platform: Platform,private http: HttpClient, private env: EnvService, private loadingController: LoadingController) 
  { }
  
getProduct(): Observable<any> {
	return this.http.get(this.env.API_URL+'/liststockreason').pipe(
		map(result => result['results'])
		
	);
}
	
		
  
  
}
