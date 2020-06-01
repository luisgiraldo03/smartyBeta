import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Clasificador } from '../models/clasificador';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  public musicControl = "";
  public expensiveControl = "";
  public numberPeopleControl = "";
  public ubicationControl = "";
  public preferenceControl = "";

  public registers: Clasificador[] = [];
  public loading: any;

  constructor(public mainService: MainService,
              public route: Router,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }

  public async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor espera...'
    });
    await this.loading.present();
  }
  public async dismissLoading() {
    await this.loadingController.dismiss();
  }

  public async search(){
    var music = this.musicControl;
    var expensive = this.expensiveControl;
    var numberPeople = this.numberPeopleControl;
    var ubication = this.ubicationControl;
    var preference = this.preferenceControl;
    await this.presentLoading();
    this.registers = await this.mainService.getFiltro(music, ubication);
    console.log(this.registers);
    localStorage.setItem('reco', JSON.stringify(this.registers));
    await this.dismissLoading();
    this.route.navigate(['recomended']);

  }

}
