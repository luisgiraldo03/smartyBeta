import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MainService } from '../services/main.service';
import { Popular } from '../models/popular';
import { Marker } from '../models/Marker';
import { async } from '@angular/core/testing';
declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public populares: Popular[] = [];
  public map = null;
  markers: Marker[] = [];
  
  constructor(public navCtrl: NavController, public mainService: MainService) {}

  async ngOnInit() {
    this.getPopulares();
    await this.getMarkers();
    this.loadMap();
  }

  public async getMarkers(){
    await this.getPopulares();
    this.populares.forEach(element => {
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
  
  public async getPopulares(){
    try{
      this.populares = await this.mainService.getPopulares();
      console.log(this.populares);
    }catch(e){
      console.log("No se pudo"+e);
    }
  }

  public loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat:  6.244338, lng: -75.573553};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      mapTypeId: 'roadmap',
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: false
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  public async renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  public async addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}
