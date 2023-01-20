import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesreportPage } from './salesreport.page';

const routes: Routes = [
  {
    path: '',
    component: SalesreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesreportPageRoutingModule {}
