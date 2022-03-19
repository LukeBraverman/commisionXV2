import {EventEmitter, Injectable} from "@angular/core";
import {Observable} from "rxjs";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthStatusService {

  public isUserInLogInMOde = new EventEmitter<boolean>();

}
