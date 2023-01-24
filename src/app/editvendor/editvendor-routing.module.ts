import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditvendorPage } from './editvendor.page';

const routes: Routes = [
  {
    path: '',
    component: EditvendorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditvendorPageRoutingModule {}
