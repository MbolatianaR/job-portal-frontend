import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job.model';
import { Observable } from 'rxjs';
import { environment } from '../pages/environment/environment';

@Injectable({ providedIn: 'root' })
export class JobService {
  
  private apiUrl = `${environment.apiUrl}v1/jobs`;
  constructor(private http: HttpClient) {}

  createJob(jobData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, jobData);
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  getJobsByRecruiter(recruiterId: string): Observable<Job[]> {
  return this.http.get<Job[]>(`${this.apiUrl}/recruiter/${recruiterId}`);
  }

  deleteJob(jobId: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${jobId}`);
}



}
