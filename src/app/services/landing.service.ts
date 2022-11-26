import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  getPlans(){
    const httpHeaders = new HttpHeaders()
    httpHeaders.append('content-type', 'application/jspn')

    return this.http.get(`${environment.API_URL}/plans`, {
      headers: httpHeaders
    })
  }
}
