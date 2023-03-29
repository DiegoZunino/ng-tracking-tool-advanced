import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService) { }

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

    if(this.isLoginMode){
      this.authService.login(authForm.value).subscribe(
        (response) => {
          console.log(response)
          this.isLoading = false;
        },
        (error) => {
          console.log(error)
          this.isLoading = false;
          this.error = error.error
        }
      )
    } else {
      this.authService.signup(authForm.value).subscribe(
        (response) => {
          console.log(response)
          this.isLoading = false;
        },
        (error) => {
          console.log(error)
          this.isLoading = false;
          this.error = error.error
        }
      )
    }
  }
}
