import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsalesPageRoutingModule } from './reportsales-routing.module';

import { ReportsalesPage } from './reportsales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsalesPageRoutingModule
  ],
  declarations: [ReportsalesPage]
})
export class ReportsalesPageModule {}
