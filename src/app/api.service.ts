import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverDetails } from './driver-details';
import { UserRegistrationDetails } from './models/user-registration-details';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // localHostUrl: string = 'http://localhost:3002/internal/';

  constructor(private httpClient: HttpClient) {}

  getDriverDetails(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get('internal/getDriverDetails', {
      responseType: 'text',
      headers,
    });
  }

  saveDriverBookingData(driver: DriverDetails): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('internal/saveBookingDetails', driver, {
      responseType: 'text',
      headers,
    });
  }

  findAvailableDriver(driver: DriverDetails): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('internal/findAvailableDriver', driver, {
      responseType: 'text',
      headers,
    });
  }

  saveUserRegistration(userDetails: UserRegistrationDetails): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('saveRegistrateruser', userDetails, {
      responseType: 'text',
      headers,
    });
  }
}
