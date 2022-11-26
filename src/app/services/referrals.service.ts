import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReferralInterface } from '../types/referral.interface';

@Injectable({
  providedIn: 'root',
})
export class ReferralsService {
  constructor(private http: HttpClient) {}

  getAll(page: number, page_size: number): Observable<ReferralInterface[]> {
    const url = `${environment.API_URL}/referrals`;

    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('page_size', page_size);

    return this.http.get<ReferralInterface[]>(url, { params: params }).pipe(
      map((response: ReferralInterface[]) => {
        return response;
      })
    );
  }
}
