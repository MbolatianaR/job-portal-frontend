import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

interface TokenPayload {
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const expectedRole = route.data['role'] as string;

    return this.auth.isLoggedIn().pipe(
      map(isLoggedIn => {
        if (!isLoggedIn) return this.router.parseUrl('/login');

        const role = this.auth.getUserRole();
        if (role === expectedRole) {
          return true;
        }
        return this.router.parseUrl('/');
      })
    );
  }
}