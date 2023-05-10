import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Credentials} from "../credentials";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  creds: Credentials = {
      email: '',
    password: ''
  };
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
  }
  login(form: NgForm){
      this.apiService.login(this.creds)
        .subscribe(response => {
          this.router.navigate(["/"]);
        })
  }
}
