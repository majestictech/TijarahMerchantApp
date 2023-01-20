import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('../inventory/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'accounts',
        loadChildren: () => import('../accounts/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
