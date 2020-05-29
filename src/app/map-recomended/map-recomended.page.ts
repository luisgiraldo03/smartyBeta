import { Component, OnInit } from '@angular/core';
import { Marker } from '../models/Marker';
import { Clasificador } from '../models/clasificador';
declare var google;

@Component({
  selector: 'app-map-recomended',
  templateUrl: './map-recomended.page.html',
  styleUrls: ['./map-recomended.page.scss'],
})
export class MapRecomendedPage implements OnInit {

  public map = null;
  markers: Marker[] = [];
  public discos: Clasificador[] = [];

  constructor() { }

  ngOnInit() {
    this.discos = JSON.parse(localStorage.getItem('reco'));
    this.getMarkers();
    this.loadMap();
  }


  public async getMarkers(){
    this.discos.forEach(element => {
      this.markers.push({
        position:{
          lat: +element.Latitude,
          lng: +element.Length
        },
        title: element.DiscoName
      });
    });
    console.log(this.markers);
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
