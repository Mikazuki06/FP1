import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/welcome',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./components/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'detailproduct',
    loadChildren: () => import('./components/detailproduct/detailproduct.module').then( m => m.DetailproductPageModule)
  },
  {
    path: 'pilih-register',
    loadChildren: () => import('./components/pilih-register/pilih-register.module').then( m => m.PilihRegisterPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./components/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'register-seller',
    loadChildren: () => import('./components/register-seller/register-seller.module').then( m => m.RegisterSellerPageModule)
  },
  {
    path: 'register-driver',
    loadChildren: () => import('./components/register-driver/register-driver.module').then( m => m.RegisterDriverPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./components/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
