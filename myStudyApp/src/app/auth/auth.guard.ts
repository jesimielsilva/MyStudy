import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  //verifica se o token existe no localStorage
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    return false;
  }  
};
