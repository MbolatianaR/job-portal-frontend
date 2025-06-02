// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // adapte à ton backend
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          this.loggedIn.next(true);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

    register(user: { firstName: string; lastName: string; email: string; phone?: string; password: string }): Observable<any> {
    // Pour l'instant mock ou appel réel au backend
    // Exemple d'appel HTTP POST vers backend
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
