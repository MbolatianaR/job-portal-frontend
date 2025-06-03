import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobService {
  private apiUrl = 'http://localhost:8080/api/jobs';

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
}
