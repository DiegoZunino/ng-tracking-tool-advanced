import {Directive, HostBinding, HostListener} from "@angular/core";
import {AuthService} from "../../core/auth/services/auth.service";
import {Router} from "@angular/router";

@Directive({
  selector: '[isLogout]'
})
export class IsLogoutDirective {
  constructor(private authService: AuthService, private router: Router){}

  @HostBinding('style.cursor') cursor = 'pointer';

  @HostListener('click') click() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}
