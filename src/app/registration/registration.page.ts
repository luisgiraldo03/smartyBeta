import { Component } from "@angular/core";
import { AuthenticationService } from "../shared/authentication-service.service";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"],
})
export class RegistrationPage {
  registerForm: FormGroup;

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
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
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

  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }

  signUp(credentials: { email: string; password: string }) {
    this.authService
      .RegisterUser(credentials.email, credentials.password)
      .then((res) => {
        this.storage.set("IsUserLogged", true);
        this.navCtrl.navigateRoot("/");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
