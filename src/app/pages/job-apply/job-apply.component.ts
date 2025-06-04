import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { MOCK_JOBS } from '../../data/jobs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css'],
  standalone: false
})
export class JobApplyComponent implements OnInit {
  job?: Job;
  applicationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.applicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      skills: [''],
      experiences: ['']
    });
  }

ngOnInit(): void {
  const jobId = this.route.snapshot.paramMap.get('id'); // récupère un string ou null
  if (jobId) {
    this.job = MOCK_JOBS.find(j => j.id === jobId);
    if (!this.job) {
      console.warn('Offre introuvable pour id:', jobId);
    }
  } else {
    console.warn('Aucun id de job fourni dans l’URL');
  }

  }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      // Ici tu enverras la candidature au backend
      const applicationData = {
        ...this.applicationForm.value,
        jobId: this.job?.id
      };
      console.log('Candidature envoyée :', applicationData);
      // Réinitialiser formulaire si besoin
      this.applicationForm.reset();
      // Eventuellement un message ou redirection
    }
  }

  goBack(): void {
    this.location.back();
  }
}
