import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  public getCode(params: any) {
    console.log('params service: ', params);

    const configUrl = 'assets/mock.json';
    // tslint:disable-next-line:max-line-length
    const URL = env.paramsUrl.endPoint + `user=${env.paramsUrl.userVendig}&perfil=${env.paramsUrl.perfil}&simultaneos=${env.paramsUrl.simultaneos}&tiempo=${params.tiempo}&valor=${params.valor}&celular=${params.celular}`;

    // return this.http.get(URL);
    return this.http.get(configUrl);
    // return this.http.get(env.paramsGetCode.endPoint);
  }
}
