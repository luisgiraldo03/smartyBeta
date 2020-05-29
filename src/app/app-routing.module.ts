import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },  {
    path: 'recomended',
    loadChildren: () => import('./recomended/recomended.module').then( m => m.RecomendedPageModule)
  },
  {
    path: 'map-recomended',
    loadChildren: () => import('./map-recomended/map-recomended.module').then( m => m.MapRecomendedPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
