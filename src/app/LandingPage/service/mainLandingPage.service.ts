import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})

export class MainLandingPageService {


  constructor(private router: Router,) {
  }


  rerouteToLoginAndSignUp() {
    this.router.navigate(['/home']);

  }
}
