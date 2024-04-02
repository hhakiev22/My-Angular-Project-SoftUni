import { inject } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export const canActivate = () => {
  const userService = inject(UserService);
  const router = inject(Router);
  const state = inject(RouterStateSnapshot);

  if (userService.currentUser.token) {
    return true;
  } else {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
