import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { TokenService } from './token.service';
import { User } from '../models/user.model';

interface LoginResult {
  accessToken: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable;


  private apiUrl = import.meta.env.NODE_ENV === "dev" ? import.meta.env.NG_APP_API_URL_LOCAL : import.meta.env.NG_APP_API_URL_PROD;
 
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
    console.log(this.apiUrl)
    this.http.post<LoginResult>(this.apiUrl+'/login', loginDetails, this.httpHeaders).subscribe(result => {
      this.token.setToken(result.accessToken)
      this.updateLoginState(true);
      this.httpHeaders.headers = this.httpHeaders.headers.set('Authorization', result.accessToken)
      window.location.reload();
    })
  }
  registerUser(newUser: Omit<User, 'id'>) {
    return this.http.post<User>(this.apiUrl+'/register', newUser)
  }
  logOut() {
    this.token.destroyToken();
    this.updateLoginState(false);
    this.httpHeaders.headers = this.httpHeaders.headers.set('Authorization', '')
  }
}
