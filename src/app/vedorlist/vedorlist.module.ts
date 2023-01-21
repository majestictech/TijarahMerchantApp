import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VedorlistPageRoutingModule } from './vedorlist-routing.module';

import { VedorlistPage } from './vedorlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VedorlistPageRoutingModule
  ],
  declarations: [VedorlistPage]
})
export class VedorlistPageModule {}
