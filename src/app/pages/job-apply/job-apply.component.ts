import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service'; // Import du service
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css'],
  standalone : false
})
export class JobApplyComponent implements OnInit {
  job?: Job;
  applicationForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService, // Ajout du service
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
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.jobService.getJobById(jobId).subscribe(job => {
        this.job = job;
      });
    }
  }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      const applicationData = {
        ...this.applicationForm.value,
        jobId: this.job?.id
      };

      console.log('Candidature envoyée :', applicationData);

      // 🔹 Ajoute ici l'appel API pour envoyer la candidature :
      // this.jobService.applyForJob(applicationData).subscribe(response => {
      //   console.log('Réponse du backend :', response);
      // });

      this.applicationForm.reset();
    }
  }

  goBack(): void {
    this.location.back();
  }
}