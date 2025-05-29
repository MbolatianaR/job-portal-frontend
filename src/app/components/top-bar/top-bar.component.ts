import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  standalone : false
})
export class TopBarComponent {
  @Output() search = new EventEmitter<string>();

  constructor(private router: Router) {}

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }
}
