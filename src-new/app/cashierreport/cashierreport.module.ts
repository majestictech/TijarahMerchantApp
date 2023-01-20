import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierreportPageRoutingModule } from './cashierreport-routing.module';

import { CashierreportPage } from './cashierreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierreportPageRoutingModule
  ],
  declarations: [CashierreportPage]
})
export class CashierreportPageModule {}
