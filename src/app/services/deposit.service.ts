import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  DepositPostRequestInterface,
  DepositPostResponseInterface,
} from '../types/deposit.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  constructor(private http: HttpClient, public auth: AuthService) {}

  add(data: FormData): Observable<DepositPostResponseInterface> {
    const url = `${environment.API_URL}/assets`;

    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAccessToken()}`,
    });

    return this.http
      .post<DepositPostResponseInterface>(url, data, { headers: headers })
      .pipe(
        map((response: DepositPostResponseInterface) => {
          return response;
        })
      );
  }
}
