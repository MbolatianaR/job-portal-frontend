import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from '../models/application.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private apiUrl = 'http://localhost:8080/api/applications';

  constructor(private http: HttpClient) {}

  submitApplication(app: Application): Observable<any> {
    return this.http.post(this.apiUrl, app);
  }

  getApplicationsByUser(userId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/user/${userId}`);
  }

  
}
