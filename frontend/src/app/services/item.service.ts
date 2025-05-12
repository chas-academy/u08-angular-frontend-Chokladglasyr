import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
private apiUrl = 'http://127.0.0.1:3003/items/'

  constructor(private http: HttpClient) { }

  getItems(listId: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}${listId}`)
  }
}
