import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['role'];

  if (auth.isLoggedIn() && auth.getRole() === expectedRole) {
    return true;
  }

  router.navigate(['/login']);
  return false;

};


