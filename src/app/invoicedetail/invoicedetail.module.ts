import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { InvoicedetailPageRoutingModule } from './invoicedetail-routing.module';

import { InvoicedetailPage } from './invoicedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    InvoicedetailPageRoutingModule
  ],
  declarations: [InvoicedetailPage]
})
export class InvoicedetailPageModule {}
