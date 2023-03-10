import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdititemPageRoutingModule } from './edititem-routing.module';

import { EdititemPage } from './edititem.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdititemPageRoutingModule,
    TranslateModule
  ],
  declarations: [EdititemPage]
})
export class EdititemPageModule {}
