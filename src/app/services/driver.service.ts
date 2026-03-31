import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';
import { Vehicle } from '../models/vehicle.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DriverService {
  private readonly baseUrl = `${environment.apiBaseUrl}/v1/api/drivers`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseUrl);
  }

  getById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/${id}`);
  }

  create(driver: Partial<Driver>): Observable<Driver> {
    return this.http.post<Driver>(this.baseUrl, driver);
  }

  update(id: number, driver: Partial<Driver>): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseUrl}/${id}`, driver);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getVehicles(driverId: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/${driverId}/vehicles`);
  }

  assignVehicle(driverId: number, vehicleId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${driverId}/vehicles`, { vehicle_id: vehicleId });
  }

  removeVehicle(driverId: number, vehicleId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${driverId}/vehicles/${vehicleId}`);
  }
}
