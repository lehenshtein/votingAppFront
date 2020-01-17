import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isRegister = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.form = fb.group({
      login: [null],
      password: [null],
      repeatPassword: [null],
    });
  }

  ngOnInit() {
  }
  public login() {
    if (this.isRegister) {
      this.isRegister = !this.isRegister;
      return;
    }
    this.userService.login(this.form.value)
      .subscribe(res => {
        console.log(res);
      });
  }
  public register() {
    if (!this.isRegister) {
      this.isRegister = !this.isRegister;
      return;
    }
    this.userService.register(this.form.value)
      .subscribe(res => {
        console.log(res);
      });
  }

}
