import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

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

  errorMessage: string = '';

  successMessage: string = '';
 
  constructor(

    private fb: FormBuilder,

    private location: Location,
<<<<<<< HEAD

    private authService: AuthService,

    private jobService: JobService

=======
    private authService: AuthService,
    private jobService: JobService  // Injection service
>>>>>>> 68200c86e142bdeb55f76b830b21ca6d4c43e08c
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
<<<<<<< HEAD

=======
>>>>>>> 68200c86e142bdeb55f76b830b21ca6d4c43e08c
    });
 
    this.recruiterId = this.authService.getUserId(); // 🔐 récupère l’ID du recruteur connecté

<<<<<<< HEAD
=======
    this.recruiterId = this.authService.getUserId();
>>>>>>> 68200c86e142bdeb55f76b830b21ca6d4c43e08c
  }
 
  onSubmit(): void {
<<<<<<< HEAD

    if (this.jobForm.valid && this.recruiterId) {

      // Le backend attend recruiterId directement, pas createdBy

=======
    if (this.jobForm.valid && this.recruiterId != null) {
>>>>>>> 68200c86e142bdeb55f76b830b21ca6d4c43e08c
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

<<<<<<< HEAD
    } else {

      this.errorMessage = "Formulaire invalide ou recruteur non connecté.";

=======
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
>>>>>>> 68200c86e142bdeb55f76b830b21ca6d4c43e08c
    }

  }
 
  goBack(): void {

    this.location.back();

  }

}

 