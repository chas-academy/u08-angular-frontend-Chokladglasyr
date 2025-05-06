import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  private token = 'accessToken'

  constructor() { }

  public setToken(token: string):void {
    sessionStorage.setItem(this.token, token)
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.token);
  }

  public destroyToken(): void {
    sessionStorage.clear();
  }
}
