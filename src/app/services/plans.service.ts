import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanInterface } from '../types/plan.interface';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<PlanInterface[]> {
    const url = `${environment.API_URL}/plans`;

    return this.http.get<PlanInterface[]>(url).pipe(
      map((response: PlanInterface[]) => {
        return response;
      })
    );
  }
}
