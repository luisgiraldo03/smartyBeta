import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapRecomendedPage } from './map-recomended.page';

const routes: Routes = [
  {
    path: '',
    component: MapRecomendedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRecomendedPageRoutingModule {}
