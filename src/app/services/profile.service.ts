import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileInterface } from '../types/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ProfileInterface[]> {
    const url = `${environment.API_URL}/profile`;

    return this.http.get<ProfileInterface[]>(url).pipe(
      map((response: ProfileInterface[]) => {
        return response;
      })
    );
  }
}
