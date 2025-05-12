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
  updateList(listId: string, userId: string, updatedTitle: string, updatedDescription: string, i: number): Observable<List> {
    console.log(listId, userId, updatedDescription, updatedTitle)
    const body = {
      title: updatedTitle,
      description: updatedDescription
    }
    return this.http.put<List>(`${this.apiUrl}/${userId}/${listId}`, body)
  }
  deleteList(listId: string, userId: string): Observable<List> {
    return this.http.delete<List>(`${this.apiUrl}/${userId}/${listId}`)
  }
}
