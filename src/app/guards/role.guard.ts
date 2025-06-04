import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
  const expectedRole = route.data['role'] as string;
  console.log('Rôle attendu:', expectedRole);

  return this.authService.isLoggedIn().pipe(
    map(isLoggedIn => {
      console.log('Utilisateur connecté:', isLoggedIn);
      if (!isLoggedIn) return this.router.parseUrl('/login');

      const role = this.authService.getUserRole();
      console.log('Rôle utilisateur récupéré:', role);

      if (role === expectedRole) return true;

      return this.router.parseUrl('/'); // redirection si rôle non autorisé
    })
  );
}
}
