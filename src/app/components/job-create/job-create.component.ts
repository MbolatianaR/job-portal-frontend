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

  errorMessage: string = '';

  successMessage: string = '';
 
  constructor(

    private fb: FormBuilder,

    private location: Location,

    private authService: AuthService,

    private jobService: JobService

  ) {}
 
  ngOnInit(): void {

    this.jobForm = this.fb.group({

      title: ['', Validators.required],

      description: ['', Validators.required],

      location: ['', Validators.required],

      type: ['CDI', Validators.required],

      salaryMin: [0, [Validators.required, Validators.min(0)]],

      salaryMax: [0, [Validators.required, Validators.min(0)]],

      experienceLevel: ['', Validators.required]

    });
 
    this.recruiterId = this.authService.getUserId(); // 🔐 récupère l’ID du recruteur connecté

  }
 
  onSubmit(): void {

    if (this.jobForm.valid && this.recruiterId) {

      // Le backend attend recruiterId directement, pas createdBy

      const jobData = {

        ...this.jobForm.value,

        recruiterId: this.recruiterId

      };
 
      this.jobService.createJob(jobData).subscribe({

        next: () => {

          this.successMessage = "Offre créée avec succès !";

          this.errorMessage = '';

          this.jobForm.reset();

        },

        error: (err) => {

          this.errorMessage = "Erreur lors de la création de l'offre.";

          this.successMessage = '';

          console.error(err);

        }

      });

    } else {

      this.errorMessage = "Formulaire invalide ou recruteur non connecté.";

    }

  }
 
  goBack(): void {

    this.location.back();

  }

}

 