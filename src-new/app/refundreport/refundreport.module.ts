import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefundreportPageRoutingModule } from './refundreport-routing.module';

import { RefundreportPage } from './refundreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefundreportPageRoutingModule
  ],
  declarations: [RefundreportPage]
})
export class RefundreportPageModule {}
