import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { EnvService } from '../services/env.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  productsList: any = [];
  productData:  Observable<any>;
  currentPage: number = 1;
  dataLoading: string = 'Loading Data...';


  constructor(public productsService: ProductsService,public env: EnvService,) {
	console.log('Constructor of Tab3 Called');
  this.loadData('firstload', '');
 }

 ngOnInit() {}
  loadData(type,event) 
	{
    if(type == 'firstload' || type == 'refresh') {
			this.currentPage = 1;
			this.dataLoading = 'Loading Data...';
			this.productsList = [];
		}
    /* this.productsService.getProduct().subscribe(res => {
			this.stockReasons  = res;
		}); */
     this.productsService.getProducts().subscribe(res => {
			this.productsList  = res;
      this.env.alertCheck(JSON.stringify(res));
      this.env.alertCheck("123");
		});
   console.log("thisproductsList" );
   console.log(JSON.stringify(this.productsList) );
   console.log("this.productsList  end");

  }

  /* selectProducts(ev: any) {
		let value:number = 0;
		value = ev.target.value;

		this.products = value;
		
	} */


  ionViewDidEnter(){}


  ionViewWillEnter() 
	{
    this.loadData('firstload', '');
    alert("one");
  }

}
