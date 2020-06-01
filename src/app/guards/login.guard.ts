import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate() {
    const isUserLogged = await this.storage.get("IsUserLogged");
    if (isUserLogged) {
      return true;
    } else {
      //Do something
      this.router.navigateByUrl('/login')
    }
  }
}
