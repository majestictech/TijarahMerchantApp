import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [EditvendorPage]
})
export class EditvendorPageModule {}
