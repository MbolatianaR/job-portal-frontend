import { Component, OnInit } from '@angular/core';
import { Job } from './models/job.model';
import { JobService } from './services/job.service'; // Import du service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone : false
})
export class AppComponent implements OnInit {
  allJobs: Job[] = [];
  filteredJobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(jobs => {
      this.allJobs = jobs;
      this.filteredJobs = jobs; // Initialisation des jobs filtrés avec toutes les offres
    });
  }

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