// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';


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

    getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload: any = (jwt_decode as any).default(token);
      return payload.role || null;
    } catch (e) {
      console.error('Erreur décodage token', e);
      return null;
    }
  }

    getUserId(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload: any = (jwt_decode as any).default(token);
      // Ajuste selon le nom exact de la propriété user id dans ton token JWT
      return payload.sub || payload.id || null;
    } catch (e) {
      console.error('Erreur décodage token', e);
      return null;
    }
  }

  
  
}
