import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ReleasePostRequestInterface,
  ReleasesResponseInterface,
} from '../types/release.interface';

@Injectable({
  providedIn: 'root',
})
export class ReleasesService {
  constructor(private http: HttpClient) {}

  getAll(
    page: number,
    page_size: number
  ): Observable<ReleasesResponseInterface> {
    const url = `${environment.API_URL}/releases`;

    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('page_size', page_size);

    return this.http
      .get<ReleasesResponseInterface>(url, { params: params })
      .pipe(
        map((response: ReleasesResponseInterface) => {
          return response;
        })
      );
  }

  add(data: ReleasePostRequestInterface): Observable<any> {
    const url = `${environment.API_URL}/releases`;

    return this.http.post<any>(url, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
