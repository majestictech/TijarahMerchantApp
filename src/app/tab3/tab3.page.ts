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
  constructor(public productsService: ProductsService,public env: EnvService,) {
	console.log('Constructor of Tab3 Called');
 }

 ngOnInit() {}
  loadData() 
	{
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
    this.loadData() ;
    alert("one");
  }

}
