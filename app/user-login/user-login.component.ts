import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {
  FormGroup,
  FormBuilder,
  FormControl
} from '../../../node_modules/@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loadProgress = false;
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {}

  submit(value: any) {
    this.auth.login(value.email, value.password);
    this.loadProgress = true;
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 5000);
  }

  register() {
    DataService.showLogin.emit(false);
  }
}
