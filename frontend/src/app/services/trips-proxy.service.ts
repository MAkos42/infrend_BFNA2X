import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TripDTO } from '../DTO/TripDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsProxyService {
  getAllTrips(): Observable<TripDTO[]> {
    const url = `${this.apiUrl}/trips`;
    return this.http.get<TripDTO[]>(url);
  }
  saveTrip(newTrip: TripDTO): Observable<TripDTO> {
    const url = `${this.apiUrl}/savetrip`;
    return this.http.post<TripDTO>(url, newTrip);
  }
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }



}
