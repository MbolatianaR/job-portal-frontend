import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { MOCK_JOBS } from '../../data/jobs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  standalone : false
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  @Input() searchTerm: string = '';

  ngOnInit(): void {
    this.jobs = MOCK_JOBS;
  }

  get filteredJobs(): Job[] {
    if (!this.searchTerm) return this.jobs;
    const term = this.searchTerm.toLowerCase();
    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.description.toLowerCase().includes(term)
    );
  }
}
