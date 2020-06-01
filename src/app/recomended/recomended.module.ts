import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendedPageRoutingModule } from './recomended-routing.module';

import { RecomendedPage } from './recomended.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendedPageRoutingModule
  ],
  declarations: [RecomendedPage]
})
export class RecomendedPageModule {}
