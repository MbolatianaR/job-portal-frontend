import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone: false
})
export class TopBarComponent implements OnInit {
  @Output() searchFilters = new EventEmitter<{
    keyword: string;
    type: string;
    location: string;
  }>();

  keyword = '';
  selectedType = '';
  selectedLocation = '';

  types = [
    "CDI", "CDD", "Stage", "Freelance", "Temps partiel", "Intérim", "Apprentissage", "Alternance"
  ];

  locations = ['Paris', 'Lyon', 'Marseille', 'Remote'];

  isLoggedIn = false;
  userRole: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.userRole = this.authService.getUserRole();
        console.log('User role:', this.userRole);
      } else {
        this.userRole = null;
      }
    });
  }

  emitFilters() {
    this.searchFilters.emit({
      keyword: this.keyword,
      type: this.selectedType,
      location: this.selectedLocation
    });
  }

  goToCreate() {
    if (this.userRole === 'RECRUITER') {
      this.router.navigate(['/create']);
    } else {
      alert('Seuls les recruteurs peuvent créer des offres.');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  goToCandidature() {
    this.router.navigate(['/my-applications']);  // bien mettre /my-applications ici
  }

  goToManageJobs() {
    this.router.navigate(['/manage-jobs']);  // bien mettre /my-applications ici
  }

}
