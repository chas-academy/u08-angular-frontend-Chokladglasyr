import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = import.meta.env.NODE_ENV === "dev" ? import.meta.env.NG_APP_API_URL_LOCAL : import.meta.env.NG_APP_API_URL_PROD;


  constructor(private http: HttpClient) { }

  getItems(listId: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/items/${listId}`)
  }
}
