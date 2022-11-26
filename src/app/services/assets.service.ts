import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssetsResponseInterface } from '../types/asset.interface';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(private http: HttpClient) {}

  getAll(page: number, page_size: number): Observable<AssetsResponseInterface> {
    const url = `${environment.API_URL}/assets`;

    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('page_size', page_size);

    return this.http.get<AssetsResponseInterface>(url, { params: params }).pipe(
      map((response: AssetsResponseInterface) => {
        return response;
      })
    );
  }
}
