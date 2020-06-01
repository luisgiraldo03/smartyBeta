import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendedPage } from './recomended.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendedPageRoutingModule {}
