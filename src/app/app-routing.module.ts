import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },

  {
    path: 'reportsales',
    loadChildren: () => import('./reportsales/reportsales.module').then( m => m.ReportsalesPageModule)
  },
  {
    path: 'salesreport',
    loadChildren: () => import('./salesreport/salesreport.module').then( m => m.SalesreportPageModule)
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
    path: 'refundreport',
    loadChildren: () => import('./refundreport/refundreport.module').then( m => m.RefundreportPageModule)
  },
  {
    path: 'cashierreport',
    loadChildren: () => import('./cashierreport/cashierreport.module').then( m => m.CashierreportPageModule)
  },
  {
    path: 'mediareport',
    loadChildren: () => import('./mediareport/mediareport.module').then( m => m.MediareportPageModule)
  },
  {
    path: 'inventoryreport',
    loadChildren: () => import('./inventoryreport/inventoryreport.module').then( m => m.InventoryreportPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login/:logout',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
	data: {
      preload: true
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {

    path: 'purchase',
    loadChildren: () => import('./purchase/purchase.module').then( m => m.PurchasePageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./invoices/invoices.module').then( m => m.InvoicesPageModule),
    data: {
      preload: true,
	  name: 'invoices'
    }


  },
  {

    path: 'additem',
    loadChildren: () => import('./additem/additem.module').then( m => m.AdditemPageModule),
    data: {
      preload: true,
	  name: 'additem'
    }
  },
  {
    path: 'edititem',
    loadChildren: () => import('./edititem/edititem.module').then( m => m.EdititemPageModule),
    data: {
      preload: true,
	  name: 'edititem'
    }

  },
  {
    path: 'vendorlist',
    loadChildren: () => import('./vendorlist/vendorlist.module').then( m => m.VendorlistPageModule),
    data: {
      preload: true,
	  name: 'vendorlist'
    }


    


  },
  {
    path: 'addinvoice',
    loadChildren: () => import('./addinvoice/addinvoice.module').then( m => m.AddinvoicePageModule),
    data: {
      preload: true,
	  name: 'addinvoice'
    }
  },
  {
    path: 'editinvoice',
    loadChildren: () => import('./editinvoice/editinvoice.module').then( m => m.EditinvoicePageModule),
    data: {
      preload: true,
	  name: 'editinvoice'
    }


  },
  {
    path: 'vendors',
    loadChildren: () => import('./vendors/vendors.module').then( m => m.VendorsPageModule),
    data: {
      preload: true,
	  name: 'vendors'
    }

  },
  {
    path: 'addvendor',
    loadChildren: () => import('./addvendor/addvendor.module').then( m => m.AddvendorPageModule),
    data: {
      preload: true,
	  name: 'addvendor'
    }
  },
  {
    path: 'editvendor',
    loadChildren: () => import('./editvendor/editvendor.module').then( m => m.EditvendorPageModule),
    data: {
      preload: true,
	  name: 'editvendor'
    }
  },
  {
    path: 'viewinvoice',
    loadChildren: () => import('./viewinvoice/viewinvoice.module').then( m => m.ViewinvoicePageModule)
  },
  {
    path: 'invoicedetail',
    loadChildren: () => import('./invoicedetail/invoicedetail.module').then( m => m.InvoicedetailPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
