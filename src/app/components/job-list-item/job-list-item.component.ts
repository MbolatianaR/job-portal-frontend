import { Component, Input } from '@angular/core';
import { Job } from '../.././models/job.model';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css'],
  standalone : false
})
export class JobListItemComponent {
  @Input() job!: Job;
}
