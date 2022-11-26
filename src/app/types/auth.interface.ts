export interface LoginRequestInterface {
  email: string;
  password: string;
}
export interface LoginResponseInterface {
  email: string;
  password: string;
  token: string;
}
export interface RegisterRequestInterface {
  email: string;
  password: string;
}
export interface RegisterResponseInterface {
  email: string;
  password: string;
  token: string;
}
export interface CurrentUserInterface {
  email: string;
  password: string;
  token: string;
}
export interface RefreshTokenRequestInterface {
  accessToken: string;
  refreshToken: string;
}
