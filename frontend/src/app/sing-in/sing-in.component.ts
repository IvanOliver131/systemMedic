import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authentication/auth.service';
import { UserService } from '../service/user/user.service';
import { Authentication } from '../shared/authentication';
import { User } from '../shared/user';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})

export class SingInComponent implements OnInit {

  user: User = new User();
  authentication: Authentication = new Authentication();
  el: any;

  constructor(
    private authSvc: AuthService,
    private userSvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.el = document.querySelector(".containerr");
    this.el.classList.add("sign-up-mode");
  }

  remove() {
    this.el = document.querySelector(".containerr");
    this.el.classList.remove("sign-up-mode");
  }

  verifyInputs2() {
    let msg = ``
    let success = true;
    if (!this.user.email) {
      msg += `O campo E-mail é requerido.`;
      success = false;
    }
    if (!this.user.password) {
      msg += ` O campo Senha é requerido`;
      success = false;
    }
    if (!success) {
      console.log(msg, `Ok`, {
        duration: 3000,
      });
    }
    return success;
  }

  registerUser() {
    if (this.verifyInputs2()) {
      this.userSvc.register(this.user).subscribe(
        () => {
        }
      );
      this.user = new User();
    }
  }

  verifyInputs() {
    let msg = ``
    let success = true;
    if (!this.authentication.email) {
      msg += `O campo E-mail é requerido.`;
      success = false;
    }
    if (!this.authentication.password) {
      msg += ` O campo Senha é requerido`;
      success = false;
    }
    if (!success) {
      console.log(msg, `Ok`, {
        duration: 3000,
      });
    }
    return success;
  }

  authenticate() {
    if (this.verifyInputs()) {
      this.authSvc.login(this.authentication).subscribe(
        () => {
          this.router.navigateByUrl('painel');
        }
      );

      this.authentication = new Authentication();

    }
  }
}
