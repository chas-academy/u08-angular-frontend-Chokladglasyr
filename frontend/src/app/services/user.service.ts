import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = import.meta.env.NODE_ENV === "dev" ? import.meta.env.NG_APP_API_URL_LOCAL : import.meta.env.NG_APP_API_URL_PROD;


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }
  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/profile`)
  }
  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`)
  }
  addUser(UserData: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, UserData)
  }
  updateUser(userId: string, updatedName: string, updatedEmail: string, i: number): Observable<User> {
    console.log(userId, updatedName, updatedEmail)
    const body = {
      title: updatedName,
      description: updatedEmail
    }
    return this.http.put<User>(`${this.apiUrl}/users/edit/${userId}`, body)
  }
  deleteUser(userId: string): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/users/${userId}`)
  }
}

