import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { MOCK_JOBS } from '../../data/jobs';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private fb: FormBuilder,
    private location: Location
  ) {
    this.applicationForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      skills: [''],
      experiences: ['']
    });
  }

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.job = MOCK_JOBS.find(j => j.id === jobId);
  }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      console.log('Candidature envoyée :', this.applicationForm.value);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
