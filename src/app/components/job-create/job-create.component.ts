import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css'],
  standalone: false
})
export class JobCreateComponent implements OnInit {
  jobForm!: FormGroup;
  recruiterId!: string | null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthService,
    private jobService: JobService  // Injection service
  ) {}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      type: ['CDI', Validators.required],
      salaryMin: [0, Validators.required],
      salaryMax: [0, Validators.required],
      experienceLevel: ['', Validators.required]
    });

    this.recruiterId = this.authService.getUserId();
  }

  onSubmit(): void {
    if (this.jobForm.valid && this.recruiterId != null) {
      const jobData = {
        ...this.jobForm.value,
        recruiterId: this.recruiterId
      };

      this.jobService.createJob(jobData).subscribe({
        next: (res) => {
          this.successMessage = "Offre créée avec succès !";
          this.errorMessage = null;
          this.jobForm.reset();
          // Optionnel : revenir à la liste ou autre
          this.goBack();
        },
        error: (err) => {
          this.errorMessage = "Erreur lors de la création de l'offre.";
          this.successMessage = null;
          console.error(err);
        }
      });
    } else {
      this.errorMessage = "Formulaire invalide ou recruteur non identifié";
    }
  }

  goBack(): void {
    this.location.back();
  }
}
