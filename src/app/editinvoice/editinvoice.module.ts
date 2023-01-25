import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditinvoicePageRoutingModule } from './editinvoice-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { EditinvoicePage } from './editinvoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditinvoicePageRoutingModule,
    TranslateModule
  ],
  declarations: [EditinvoicePage]
})
export class EditinvoicePageModule {}
