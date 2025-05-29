import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { MOCK_JOBS } from '../../data/jobs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html'
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  ngOnInit(): void {
    this.jobs = MOCK_JOBS;
  }
}
