import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service'; // Import du service

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  standalone : false
})
export class JobDetailComponent implements OnInit {
  job: Job | undefined;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

ngOnInit(): void {
  const jobId = this.route.snapshot.paramMap.get('id'); // string | null
  if (jobId) {
    this.jobService.getJobById(jobId).subscribe({
      next: (job) => this.job = job,
      error: () => console.warn('Offre introuvable pour id:', jobId)
    });
  } else {
    console.error('Id manquant dans l’URL');
  }
}



}