import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css'],
  standalone : false
})
export class JobApplyComponent implements OnInit {
  applicationForm!: FormGroup;
  jobId!: string;
  userId!: string | null;
  successMessage = '';
  errorMessage = '';
 
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private jobService: JobService,
    private authService: AuthService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id') || '';
    this.userId = this.authService.getUserId();
 
    this.applicationForm = this.fb.group({
      skills: ['', Validators.required],
      experiences: ['', Validators.required],
    });
  }
 
  onSubmit(): void {
    if (this.applicationForm.valid && this.userId) {
      const applicationData = {
        userId: this.userId,
        ...this.applicationForm.value
      };
 
      this.jobService.applyForJob(this.jobId, applicationData).subscribe({
        next: () => {
          this.successMessage = 'Candidature envoyée avec succès !';
          this.errorMessage = '';
          this.applicationForm.reset();
        },
        error: () => {
          this.errorMessage = 'Erreur lors de l’envoi de la candidature';
        }
      });
    }
  }

  goBack(): void{
    this.location.back();
  }
}