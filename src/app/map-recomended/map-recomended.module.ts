import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapRecomendedPageRoutingModule } from './map-recomended-routing.module';

import { MapRecomendedPage } from './map-recomended.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapRecomendedPageRoutingModule
  ],
  declarations: [MapRecomendedPage]
})
export class MapRecomendedPageModule {}
