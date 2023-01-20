import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediareportPage } from './mediareport.page';

const routes: Routes = [
  {
    path: '',
    component: MediareportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediareportPageRoutingModule {}
