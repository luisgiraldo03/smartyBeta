import { Component } from '@angular/core';

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public categorias = ['Más polullares', 'Tus favoritas', 'Cerca de ti']

  markers: Marker[] = [
    {
      position: {
        lat: 6.20888,
        lng: -75.567779,
      },
      title: 'Parque Llenas'
    },
    {
      position: {
        lat: 6.279074,
        lng: -75.588767,
      },
      title: 'Discoteca prueba 1'
    },
    {
      position: {
        lat: 6.200202,
        lng: -75.578485,
      },
      title: 'Discoteca prueba 2'
    },
    {
      position: {
        lat: 6.232567 ,
        lng:  -75.603868,
      },
      title: 'Discoteca prueba 3'
    },
  ];

  constructor() {}

}
