import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application.model';
import { AuthService } from '../../services/auth.service';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css'],
  standalone : false
})
export class MyApplicationsComponent implements OnInit {
  applications: Application[] = [];
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.applicationService.getApplicationsByUser(userId).subscribe({
        next: (data) => {
          this.applications = data;
        },
        error: (err) => {
          this.errorMessage = "Erreur lors du chargement de vos candidatures.";
          console.error(err);
        }
      });
    } else {
      this.errorMessage = "Utilisateur non identifié.";
    }
  }
  convertToDate(dateString: string): Date {
  return new Date(dateString);
}
}
