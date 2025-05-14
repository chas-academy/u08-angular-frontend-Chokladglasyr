import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://127.0.0.1:3003'
  constructor(private http: HttpClient) { }

  getListsByUsername(username: string): Observable<List[] | string>  {
    return this.http.get<List[]>(`${this.apiUrl}/search?name=${username}`)
      .pipe(
        catchError(error => {
          console.log(error)
          let errMsg: string;
          if(error.error.message === undefined) {
            errMsg = "Something went wrong, try again later!";
          } else {
            errMsg = error.error.message
          }
          return throwError(() => new Error(errMsg))
        })
      )
  }
}
