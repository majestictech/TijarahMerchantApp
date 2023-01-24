import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditvendorPageRoutingModule } from './editvendor-routing.module';

import { EditvendorPage } from './editvendor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditvendorPageRoutingModule,
    TranslateModule
  ],
  declarations: [EditvendorPage]
})
export class EditvendorPageModule {}
