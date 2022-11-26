import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LoginRequestInterface,
  LoginResponseInterface,
  RefreshTokenRequestInterface,
  RegisterRequestInterface,
  RegisterResponseInterface,
} from '../types/auth.interface';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  isLoggedIn() {
    // return true;
    return !!this.getAccessToken() && !this.isTokenExpired();
  }

  addUsername(username: string) {
    localStorage.setItem('username', username);
  }

  addAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  addRefreshToken(refToken: string) {
    localStorage.setItem('refreshToken', refToken);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  // check expiration of our token
  isTokenExpired() {
    const token: string = this.getAccessToken() ?? '';
    if (!token) return false;
    const tokenSplit: string = token.split('.')[1];
    const decodedString: string = atob(tokenSplit);
    const jsonString = JSON.parse(decodedString);
    const expiry = jsonString.exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }

  // // refreshing the access token
  // async refreshingToken(): Promise<boolean> {
  //   const token = this.getAccessToken();
  //   const refreshToken = this.getRefreshToken();
  //   if (!token || !refreshToken) {
  //     return false;
  //   }
  //   let success!: boolean;
  //   const data: RefreshTokenRequestInterface = {
  //     accessToken: token,
  //     refreshToken: refreshToken,
  //   };

  //   this.tokenService.generateRefreshToken(data).subscribe({
  //     next: (response) => {
  //       this.addAccessToken(response.accessToken);
  //       this.addRefreshToken(response.refreshToken);
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //       success = false;
  //     },
  //   });
  //   return success;
  // }

  login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
    const url = `${environment.API_URL}/auth/login`;
    return this.http.post<LoginResponseInterface>(url, data).pipe(
      map((response: LoginResponseInterface) => {
        return response;
      })
    );
  }

  register(
    data: RegisterRequestInterface
  ): Observable<RegisterResponseInterface> {
    const url = `${environment.API_URL}/auth/register`;
    return this.http.post<RegisterResponseInterface>(url, data).pipe(
      map((response: RegisterResponseInterface) => {
        return response;
      })
    );
  }
}
