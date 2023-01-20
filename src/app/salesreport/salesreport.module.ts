import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesreportPageRoutingModule } from './salesreport-routing.module';

import { SalesreportPage } from './salesreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesreportPageRoutingModule
  ],
  declarations: [SalesreportPage]
})
export class SalesreportPageModule {}
