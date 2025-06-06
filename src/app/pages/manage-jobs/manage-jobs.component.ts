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
  userRole: string | null = null;

  constructor(
    private authService: AuthService,
    private jobService: JobService
  ) {}

    ngOnInit(): void {
      this.userRole = this.authService.getUserRole()?.toUpperCase() || null;
      console.log('Rôle utilisateur:', this.userRole);

      const recruiterId = this.authService.getUserId();
      if (recruiterId) {
        this.loadJobs(recruiterId);
      } else {
        this.errorMessage = "Utilisateur non identifié.";
      }
    }


  loadJobs(recruiterId: string): void {
    this.jobService.getJobsByRecruiter(recruiterId).subscribe({
      next: (data) => {
        this.jobs = data;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors du chargement des offres.";
        console.error(err);
      }
    });
  }

  deleteJob(jobId?: string): void {
    if (!jobId) return;
    if (confirm("Voulez-vous vraiment supprimer cette offre ?")) {
      this.jobService.deleteJob(jobId).subscribe({
        next: () => {
          // Retirer le job de la liste locale sans recharger tout
          this.jobs = this.jobs.filter(job => job.id !== jobId);
        },
        error: (err: any) => {
          this.errorMessage = "Erreur lors de la suppression de l'offre.";
          console.error(err);
        }
      });
    }
  }

  trackByJobId(index: number, job: Job): string {
    if (!job.id) throw new Error('Job id is undefined');
    return job.id;
  }
}
