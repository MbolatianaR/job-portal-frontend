import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../pages/environment/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  //private apiUrl = 'http://localhost:8080/api/users';
  private apiUrl = `${environment.apiUrl}users`;
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
