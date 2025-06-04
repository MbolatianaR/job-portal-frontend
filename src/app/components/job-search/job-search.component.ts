import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  standalone : false
})
export class JobSearchComponent {
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

  onSearch(): void {
    this.searchFilters.emit({
      keyword: this.keyword,
      type: this.selectedType,
      location: this.selectedLocation
    });
  }

  reset(): void {
    this.keyword = '';
    this.selectedType = '';
    this.selectedLocation = '';
    this.onSearch();
  }
}
