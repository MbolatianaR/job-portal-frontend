import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css'],
  standalone: false
})
export class JobCreateComponent implements OnInit {
  jobForm!: FormGroup;
  recruiterId!: string | null;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthService
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
      // Pas besoin de champ recruiterId dans formulaire visible
    });

    // Récupérer l'id du recruteur connecté via AuthService
    this.recruiterId = this.authService.getUserId(); // supposé retourner un number ou null
  }

  onSubmit(): void {
    if (this.jobForm.valid && this.recruiterId != null) {
      // Préparer l'objet complet avec recruiterId
      const jobData = {
        ...this.jobForm.value,
        recruiterId: this.recruiterId
      };

      console.log('Nouvelle offre avec recruteur :', jobData);
      // Ici, appeler ton service pour envoyer jobData au backend
      this.jobForm.reset();
    } else {
      console.error('Formulaire invalide ou recruteur non identifié');
    }
  }

  goBack(): void {
    this.location.back();
  }
}
