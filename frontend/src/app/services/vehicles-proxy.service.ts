import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleDTO } from '../DTO/VehicleDTO';

@Injectable({
  providedIn: 'root'
})
export class VehiclesProxyService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your backend proxy server URL

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<VehicleDTO[]> {
    const url = `${this.apiUrl}/vehicles`; // Replace 'table' with your endpoint URL
    return this.http.get<VehicleDTO[]>(url);
  }

  saveVehicle(vehicle: VehicleDTO): Observable<VehicleDTO> {
    const url = `${this.apiUrl}/savevehicle`;
    console.log('service posted');
    return this.http.post<VehicleDTO>(url, vehicle);
  }
}
