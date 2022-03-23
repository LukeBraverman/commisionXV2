import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServicev3} from "../service/AuthServiceV3.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuardV3 implements CanActivate {

  constructor(
    public authService: AuthServicev3,
    public router: Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isLoggedIn !== true) {
      this.router.navigate(['login'])
    }
    return true;
  }
}
