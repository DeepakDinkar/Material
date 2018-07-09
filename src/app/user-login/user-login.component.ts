import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loadProgress = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.loadProgress = true;
    setTimeout(() => {
        this.router.navigate(['home']);
    }, 5000);
  }

  register() {
    DataService.showLogin.emit(false);
  }
}
