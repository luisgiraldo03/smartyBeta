import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Clasificador } from '../models/clasificador';
import { Popular } from '../models/popular';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public http: HttpClient) { }

  public async getClasificador(): Promise<Clasificador[]> {
    return new Promise<Clasificador[]>((resolve, reject) => {
      this.http.get<Clasificador[]>(environment.rootURL + 'clasificador').subscribe(resolve, reject);
    });
  }

  public async getPopulares(): Promise<Popular[]> {
    return new Promise<Popular[]>((resolve, reject) => {
      this.http.get<Popular[]>(environment.rootURL + 'populares').subscribe(resolve, reject);
    });
  }

}
