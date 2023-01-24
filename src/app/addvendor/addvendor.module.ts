import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvendorPageRoutingModule } from './addvendor-routing.module';

import { AddvendorPage } from './addvendor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvendorPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddvendorPage]
})
export class AddvendorPageModule {}
