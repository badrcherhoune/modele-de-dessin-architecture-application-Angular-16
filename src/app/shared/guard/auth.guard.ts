import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthentificationService);
  let authentificated = service.isauthentificated();
  if(authentificated == false){
    router.navigateByUrl("/login");
    return false;
  }else {
    return true;
  }
};
