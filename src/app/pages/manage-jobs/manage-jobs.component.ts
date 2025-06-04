import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css'],
  standalone: false
})
export class ManageJobsComponent implements OnInit {
  jobs: Job[] = [];
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    const recruiterId = this.authService.getUserId();
    if (recruiterId) {
      this.jobService.getJobsByRecruiter(recruiterId).subscribe({
        next: (data) => {
          this.jobs = data;
        },
        error: (err) => {
          this.errorMessage = "Erreur lors du chargement des offres.";
          console.error(err);
        }
      });
    } else {
      this.errorMessage = "Utilisateur non identifié.";
    }
  }

  trackByJobId(index: number, job: Job): string {
    if (!job.id) {
      throw new Error('Job id is undefined');
    }
    return job.id;
  }

}
