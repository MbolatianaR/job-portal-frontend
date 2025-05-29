import { Component } from '@angular/core';
import { Job } from '../../models/job.model';
import { MOCK_JOBS } from '../../data/jobs';

@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.css'],
  standalone : false
})
export class JobListPageComponent {
  allJobs: Job[] = MOCK_JOBS;
  filteredJobs: Job[] = MOCK_JOBS;

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