import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { tap, map, take } from 'rxjs/operators';
import {FsOauthService} from "./fs-oauth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardV2 implements CanActivate {
  constructor(private auth: FsOauthService, private router: Router,private afAuth: AngularFireAuth,) {}

  // canActivate(next, state): Observable<boolean> {
  //   return this.auth.user$.pipe(
  //     take(1),
  //     map(user => !!user), // <-- map to boolean
  //     tap(loggedIn => {
  //       console.log('called')
  //       if (!loggedIn) {
  //         console.log('access denied');
  //         this.router.navigate(['/']);
  //       }
  //     })
  //   );
  // }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const user = await this.afAuth.currentUser;
    const isLoggedIn = !!user;
    if (!isLoggedIn) {
      console.log('not logged')
    }
    return isLoggedIn;
  }

}
