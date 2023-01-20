import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsalesPage } from './reportsales.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsalesPageRoutingModule {}
