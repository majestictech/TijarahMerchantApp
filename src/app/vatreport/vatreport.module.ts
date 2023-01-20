import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VatreportPageRoutingModule } from './vatreport-routing.module';

import { VatreportPage } from './vatreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VatreportPageRoutingModule
  ],
  declarations: [VatreportPage]
})
export class VatreportPageModule {}
