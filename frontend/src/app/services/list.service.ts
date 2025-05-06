import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://127.0.0.1:3003/lists'

  constructor(private http: HttpClient) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiUrl}`)
  }
  addList(listData: Omit<List, 'id'>): Observable<List> {
    return this.http.post<List>(`${this.apiUrl}`, listData)
  }
}
