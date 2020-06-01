import { Component, OnInit } from '@angular/core';
import { Marker } from '../models/Marker';
import { Clasificador } from '../models/clasificador';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  async ngOnInit() {
    await this.getDiscos();
    await this.getMarkers();
    this.loadMap();
    this.router.navigate(['tabs/tab1']);
  }


  public async getDiscos(){
    this.discos = await JSON.parse(localStorage.getItem('reco'));
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

  public async loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat:  6.244338, lng: -75.573553};
    // create map
    this.map =  await new google.maps.Map(mapEle, {
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
