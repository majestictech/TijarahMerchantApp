import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'salesreport',
    loadChildren: () => import('./salesreport/sales-report.module').then( m => m.SalesReportPageModule)
  },
  {
    path: 'vatreport',
    loadChildren: () => import('./vatreport/vatreport.module').then( m => m.VatreportPageModule)
  },
  {
    path: 'purchasereport',
    loadChildren: () => import('./purchasereport/purchasereport.module').then( m => m.PurchasereportPageModule)
  },
  {
    path: 'mediareport',
    loadChildren: () => import('./mediareport/mediareport.module').then( m => m.MediareportPageModule)
  },
  {
    path: 'cashierreport',
    loadChildren: () => import('./cashierreport/cashierreport.module').then( m => m.CashierreportPageModule)
  },
  {
    path: 'inventoryreport',
    loadChildren: () => import('./inventoryreport/inventoryreport.module').then( m => m.InventoryreportPageModule)
  },
  {
    path: 'refundreport',
    loadChildren: () => import('./refundreport/refundreport.module').then( m => m.RefundreportPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
