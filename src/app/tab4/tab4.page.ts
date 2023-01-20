import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public async ionViewDidEnter() {
	console.log('Loading Graph...');
	await this.loadGraph();
	
	//setTimeout(() => {this.loadGraph();}, 2000);
  }
  
  ionViewDidLoad() {
	//this.loadGraph();
  }
  
  loadGraph() {
	// Generate the chart
	
	
	
  }
}


