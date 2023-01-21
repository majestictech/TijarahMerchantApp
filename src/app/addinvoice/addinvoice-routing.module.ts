import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddinvoicePage } from './addinvoice.page';

const routes: Routes = [
  {
    path: '',
    component: AddinvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddinvoicePageRoutingModule {}
