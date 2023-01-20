import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient, private env: EnvService) { }
  

  
  
  mediaReport(start,end): Observable<any> {
	return this.http.get(this.env.API_URL+'/mediareport/503'+'?start='+start+'&end='+end).pipe(
	  map(results => results['results'])
	);
  }
  
  orderVendorList(type,page,start,end) {
    return this.http.get(this.env.API_URL+'/ordervendors/503'+'?type='+type+'&start='+start+'&end='+end+'&page='+page).pipe(
	  map(results => results['results'])
	);
	
  }
  
 
 

}
