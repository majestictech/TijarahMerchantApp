import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VatreportPage } from './vatreport.page';

const routes: Routes = [
  {
    path: '',
    component: VatreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VatreportPageRoutingModule {}
