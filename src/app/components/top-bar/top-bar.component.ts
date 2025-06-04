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
  "CDI",
  "CDD",
  "Stage",
  "Freelance",
  "Temps partiel",
  "Intérim",
  "Apprentissage",
  "Alternance"];
  
  locations = ['Paris', 'Lyon', 'Marseille', 'Remote'];

  isLoggedIn = false;
  userRole: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.userRole = this.authService.getUserRole();
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
    this.router.navigate(['/create']);
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
}
