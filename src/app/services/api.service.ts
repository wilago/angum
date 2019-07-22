import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  public getCode() {
    console.log('Consumo servicio');

    const configUrl = 'assets/mock.json';

    return this.http.get(configUrl);
    // return this.http.get(env.paramsGetCode.endPoint);
  }
}
