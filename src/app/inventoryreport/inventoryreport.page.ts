import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { InventoryService } from '../services/inventory.service';
import { Observable } from 'rxjs';
import { EnvService } from '../services/env.service';


@Component({
  selector: 'app-inventoryreport',
  templateUrl: './inventoryreport.page.html',
  styleUrls: ['./inventoryreport.page.scss'],
})

export class InventoryreportPage implements OnInit {
  inventoryGraphs: Observable<any>;
  availableData: number = 0;
  outofstockData: number = 0;



  constructor(private inventoryService: InventoryService, public env: EnvService,) { }

  ngOnInit() {
  }


  loadData() {

  }

  ionViewWillEnter() {
    this.loadData();
    this.env.alertCheck("this.outofstockData");
    this.env.alertCheck(this.outofstockData);
  }

  ionViewDidEnter() {

    this.inventoryGraphs = this.inventoryService.inventoryGraphData();
    this.inventoryGraphs.subscribe(res => {

       let outofstockData = res['inventory']['outOfStock'];
       let availableData = res['inventory']['available'];
      this.env.alertCheck("this.outofstockData");
      outofstockData.toString();
      availableData.toString();


      console.log(this.outofstockData);
      console.log(this.availableData);
      console.log(res);
      // this.env.alertCheck(this.availableData);	


      // Generate the chart
      HighCharts.chart('salesChart', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Inventory Report'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'Products Available',
          colorByPoint: true,
          type: undefined,
          data: [{
            name: 'Products Out of Stock',
            y: outofstockData,
            sliced: true,
            selected: true,
            color: '#000'
          }, {
            name: 'Products Available',
            y: availableData,
            color: '#006C35'
          }]
        }]

      });
    });
  }
}