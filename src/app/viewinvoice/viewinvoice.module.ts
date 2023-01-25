import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewinvoicePageRoutingModule } from './viewinvoice-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ViewinvoicePage } from './viewinvoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewinvoicePageRoutingModule,
    TranslateModule
  ],
  declarations: [ViewinvoicePage]
})
export class ViewinvoicePageModule {}
