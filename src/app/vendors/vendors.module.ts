import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorsPageRoutingModule } from './vendors-routing.module';

import { VendorsPage } from './vendors.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorsPageRoutingModule,
    TranslateModule
  ],
  declarations: [VendorsPage]
})
export class VendorsPageModule {}
