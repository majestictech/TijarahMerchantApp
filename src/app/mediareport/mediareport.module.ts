import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediareportPageRoutingModule } from './mediareport-routing.module';

import { MediareportPage } from './mediareport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediareportPageRoutingModule
  ],
  declarations: [MediareportPage]
})
export class MediareportPageModule {}
