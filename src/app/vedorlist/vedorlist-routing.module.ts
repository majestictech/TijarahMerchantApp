import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VedorlistPage } from './vedorlist.page';

const routes: Routes = [
  {
    path: '',
    component: VedorlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VedorlistPageRoutingModule {}
