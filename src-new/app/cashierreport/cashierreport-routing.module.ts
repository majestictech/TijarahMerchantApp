import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierreportPage } from './cashierreport.page';

const routes: Routes = [
  {
    path: '',
    component: CashierreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierreportPageRoutingModule {}
