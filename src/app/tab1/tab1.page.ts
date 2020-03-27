import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public map = null;
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
  
  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.loadMap();
  }

  public loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat:  6.244338, lng: -75.573553};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  public renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  public addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }


}
