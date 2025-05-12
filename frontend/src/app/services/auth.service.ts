import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { Login } from '../models/login.model';
import { TokenService } from './token.service';

interface LoginResult {
  accessToken: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable;

  private apiUrl = 'http://127.0.0.1:3003/'
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient, private token: TokenService) { }

  getLoginStatus() {
    return this.loggedIn.value;
  }

  private updateLoginState(loginState: boolean) {
    this.loggedIn.next(loginState);
  }
  loginUser(loginDetails: Login) {
    this.http.post<LoginResult>(this.apiUrl+'login', loginDetails, this.httpHeaders).subscribe(result => {
      this.token.setToken(result.accessToken)
      this.updateLoginState(true);
      this.httpHeaders.headers = this.httpHeaders.headers.set('Authorization', result.accessToken)

    })
  }
  logOut() {
    this.token.destroyToken();
    this.updateLoginState(false);
    this.httpHeaders.headers = this.httpHeaders.headers.set('Authorization', '')
  }
}
