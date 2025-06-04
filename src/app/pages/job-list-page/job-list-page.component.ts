import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.css'],
  standalone : false
})
export class JobListPageComponent implements OnInit {
  allJobs: Job[] = [];
  filteredJobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getAllJobs().subscribe(jobs => {
      this.allJobs = jobs;
      this.filteredJobs = jobs;
    });
  }

  applyFilters(filters: { keyword: string; type: string; location: string }) {
    const { keyword, type, location } = filters;
    const kw = keyword?.toLowerCase() || '';

    this.filteredJobs = this.allJobs.filter(job => {
      const matchKeyword = !kw || job.title.toLowerCase().includes(kw) || job.description.toLowerCase().includes(kw);
      const matchType = !type || job.type === type;
      const matchLoc = !location || job.location === location;
      return matchKeyword && matchType && matchLoc;
    });
  }
}