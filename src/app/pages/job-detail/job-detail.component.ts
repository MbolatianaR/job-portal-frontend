import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { MOCK_JOBS } from '../../data/jobs';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  standalone : false
})
export class JobDetailComponent implements OnInit {
  job: Job | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id'); // id est string ou null
  if (id) {
    this.job = MOCK_JOBS.find(j => j.id === id);
  }
}

}
