import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewinvoicePage } from './viewinvoice.page';

const routes: Routes = [
  {
    path: '',
    component: ViewinvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewinvoicePageRoutingModule {}
