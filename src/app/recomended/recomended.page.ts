import { Component, OnInit } from '@angular/core';
import { Clasificador } from '../models/clasificador';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.page.html',
  styleUrls: ['./recomended.page.scss'],
})
export class RecomendedPage implements OnInit {

  public recomendations: Clasificador[] = [];

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  public getData(){
    var storage = localStorage.getItem('reco');
      this.recomendations = JSON.parse(storage);
  }

}
