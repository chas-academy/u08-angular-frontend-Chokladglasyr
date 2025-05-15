import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list.model';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = import.meta.env.NODE_ENV === "dev" ? import.meta.env.NG_APP_API_URL_LOCAL : import.meta.env.NG_APP_API_URL_PROD;


  constructor(private http: HttpClient) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiUrl}/lists`)
  }
  addList(listData: Omit<List, 'id'>): Observable<List> {
    return this.http.post<List>(`${this.apiUrl}/lists`, listData)
  }
  updateList(listId: string, userId: string, updatedTitle: string, updatedDescription: string, i: number): Observable<List> {
    console.log(listId, userId, updatedDescription, updatedTitle)
    const body = {
      title: updatedTitle,
      description: updatedDescription
    }
    return this.http.put<List>(`${this.apiUrl}/lists/${userId}/${listId}`, body)
  }
  deleteList(listId: string, userId: string): Observable<List> {
    return this.http.delete<List>(`${this.apiUrl}/lists/${userId}/${listId}`)
  }
}
