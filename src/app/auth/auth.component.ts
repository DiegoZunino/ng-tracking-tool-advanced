import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../core/auth/services/auth.service";
import {Observable} from "rxjs";
import {AuthResponse} from "../models/auth.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(authForm: NgForm) {
    if(authForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.error = null;

    let authObservable$: Observable<AuthResponse> =
        this.isLoginMode ?
        this.authService.login(authForm.value) :
        this.authService.signup(authForm.value);

    authObservable$.subscribe(
      () => {
        this.router.navigateByUrl('/projects')
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.error = error.error
      }
    )
  }
}
