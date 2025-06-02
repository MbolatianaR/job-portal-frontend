import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone : false
})
export class TopBarComponent {
  @Output() searchFilters = new EventEmitter<{
    keyword: string;
    type: string;
    location: string;
  }>();

  keyword = '';
  selectedType = '';
  selectedLocation = '';

  types = ['CDI', 'CDD', 'Stage', 'Freelance'];
  locations = ['Paris', 'Lyon', 'Marseille', 'Remote'];

  constructor(private router: Router) {}

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

}