import { Component, OnInit } from '@angular/core';
import { Clasificador } from '../models/clasificador';
import { MainService } from '../services/main.service';
import { Popular } from '../models/popular';

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
export class Tab2Page implements OnInit{

  public categorias = ['Más polullares', 'Tus favoritas', 'Cerca de ti']
  public response = "";
  public populares: Popular[] = [];

  constructor(public mainService: MainService) {}

  ngOnInit(){
    this.getPopulares();
  }

  public async getPopulares(){
    try{
      this.populares = await this.mainService.getPopulares();
      console.log(this.populares);
    }catch(e){
      console.log("No se pudo"+e);
    }
  }

}
