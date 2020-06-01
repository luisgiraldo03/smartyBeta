import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule),
    canActivate:[LoginGuard]
  },
  {
    path: 'recomended',
    loadChildren: () => import('./recomended/recomended.module').then( m => m.RecomendedPageModule),
    canActivate:[LoginGuard]
  },
  {
    path: 'map-recomended',
    loadChildren: () => import('./map-recomended/map-recomended.module').then( m => m.MapRecomendedPageModule),
    canActivate:[LoginGuard]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
