import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job.model';
import { Observable } from 'rxjs';
import { environment } from '../pages/environment/environment';

@Injectable({ providedIn: 'root' })
export class JobService {
  //private apiUrl = 'http://localhost:8080/api/jobs';
  private apiUrl = `${environment.apiUrl}jobs`;
  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  getJobsByRecruiter(recruiterId: string): Observable<Job[]> {
  return this.http.get<Job[]>(`${this.apiUrl}/recruiter/${recruiterId}`);
  }

  applyForJob(applicationData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/apply`, applicationData);
}
}
