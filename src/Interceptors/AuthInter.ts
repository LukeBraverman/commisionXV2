import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import {
  AuthenticationHandleService
} from "../app/developmentAuthentication-component/authscreen-component/service/authentication-handle.service";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthenticationHandleService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        // @ts-ignore
        const modifiedReq = req.clone({
          // @ts-ignore
          params: new HttpParams().set('auth', user.token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
