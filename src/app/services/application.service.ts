import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from '../models/application.model';
import { Observable } from 'rxjs';
import { environment } from '../pages/environment/environment';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private applicationsUrl = `${environment.apiUrl}/api/applications`;

  constructor(private http: HttpClient) {}

  submitApplication(app: Application): Observable<any> {
    return this.http.post(this.applicationsUrl, app);
  }

  getApplicationsByUser(userId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.applicationsUrl}/user/${userId}`);
  }

  
}
