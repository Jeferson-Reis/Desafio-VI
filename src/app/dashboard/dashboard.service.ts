import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VeiculosAPI, VeiculosDataAPI } from 'models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getVeiculos(){
    return this.httpClient.get<VeiculosAPI>('http://localhost:3000/vehicle');
  }
  getVeiculosData(){
    return this.httpClient.get<VeiculosDataAPI>('http://localhost:3000/vehicledata');
  }

}
