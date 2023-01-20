import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundreportPage } from './refundreport.page';

const routes: Routes = [
  {
    path: '',
    component: RefundreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefundreportPageRoutingModule {}
