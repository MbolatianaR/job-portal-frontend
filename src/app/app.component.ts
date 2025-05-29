import { Component } from '@angular/core';
import { Job } from './models/job.model';
import { MOCK_JOBS } from './data/jobs'; // adapte le chemin si besoin

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone : false
})
export class AppComponent {
  allJobs: Job[] = MOCK_JOBS;
  filteredJobs: Job[] = MOCK_JOBS;

  applyFilters(filters: { keyword: string; type: string; location: string }) {
    const keyword = filters.keyword?.toLowerCase() || '';
    const type = filters.type;
    const location = filters.location;

    this.filteredJobs = this.allJobs.filter(job => {
      const matchesKeyword =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword);

      const matchesType = !type || job.type === type;
      const matchesLocation = !location || job.location === location;

      return matchesKeyword && matchesType && matchesLocation;
    });
  }
}
