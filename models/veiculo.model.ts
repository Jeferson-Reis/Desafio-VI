export interface Veiculos extends Array<Veiculo> { }
export interface VeiculosData extends Array<VeiculoData> { }

export interface Veiculo {
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface VeiculoData {
  id: number;
  vin: string;
  odometer: number;
  tirePressure: number;
  status: string;
  batteryStatus: number;
  fuelLevel: number;
  lat: number;
  long: number;

}

export interface VeiculosAPI {
  vehicles: Veiculos;
}



export interface VeiculosDataAPI {
  vehicleData: VeiculosData;
}