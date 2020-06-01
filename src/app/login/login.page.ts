import { Component } from "@angular/core";
import { AuthenticationService } from "../shared/authentication-service.service";
import { Storage } from "@ionic/storage";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  loginForm: FormGroup;

  validationMessages = {
    email: [
      { type: "required", message: "Ups! 😳 Olvidaste escribir tu email" },
      { type: "pattern", message: "Parece que lo escribiste mal ❌" },
    ],
    password: [
      { type: "required", message: "Ups! 😳 Olvidaste escribir tu contraseña" },
      {
        type: "minLength",
        message: "Tu contraseña tiene que tener 6 caracteres ❗",
      },
    ],
  };

  constructor(
    public authService: AuthenticationService,
    private navCtrl: NavController,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  goToRegister() {
    this.navCtrl.navigateForward("/registration");
  }

  print(a) {
    console.log(a);
  }

  logIn(credentials: { email: string; password: string }) {
    this.authService
      .SignIn(credentials.email, credentials.password)
      .then((res) => {
        this.storage.set("IsUserLogged", true);
        this.navCtrl.navigateRoot("/");
      })
      .catch((error) => {
        if (error.code == "auth/user-not-found") {
          window.alert("Tu email o contraseña son incorrectos 😫");
        } else if (error.code == "auth/network-request-failed") {
          window.alert("No tienes conexión a internet 🚧");
        } else {
          window.alert(error.message);
        }
      });
  }
}
