import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddinvoicePageRoutingModule } from './addinvoice-routing.module';

import { AddinvoicePage } from './addinvoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddinvoicePageRoutingModule
  ],
  declarations: [AddinvoicePage]
})
export class AddinvoicePageModule {}
