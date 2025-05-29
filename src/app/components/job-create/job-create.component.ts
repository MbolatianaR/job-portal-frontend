import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css'],
  standalone : false
})
export class JobCreateComponent implements OnInit {
  jobForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location
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
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      console.log('Nouvelle offre :', this.jobForm.value);
      // ➕ Tu peux ici appeler un service pour l’enregistrer
      this.jobForm.reset();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
