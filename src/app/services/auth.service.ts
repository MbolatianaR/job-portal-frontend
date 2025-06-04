import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../pages/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
  //private apiUrl = 'http://localhost:8080/api/auth'; // adapte à ton backend
  private apiUrl = `${environment.apiUrl}v1/auth`;
=======
  private apiUrl = `${environment.apiUrl}auth`;
>>>>>>> 68200c86e142bdeb55f76b830b21ca6d4c43e08c
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
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload: any = jwtDecode(token);
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
      const payload: any = jwtDecode(token);
      return payload.sub || payload.id || null;
    } catch (e) {
      console.error('Erreur décodage token', e);
      return null;
    }
  }
}
