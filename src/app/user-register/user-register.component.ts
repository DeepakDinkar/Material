import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  myDatepicker = {
    parse: {
      dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' }
    },
    display: {
      dateInput: 'input',
      monthYearLabel: { year: 'numeric', month: 'short' },
      dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
      monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
  };
  constructor() {}

  ngOnInit() {}

  login() {
    DataService.showLogin.emit(true);
  }
}
