// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const expectedRole = route.data['role'] as string;
    return this.authService.isLoggedIn().pipe(
      map(isLoggedIn => {
        if (!isLoggedIn) return this.router.parseUrl('/login');
        const role = this.authService.getUserRole();
        if (role === expectedRole) return true;
        return this.router.parseUrl('/');
      })
    );
  }
}
