import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {first, map, Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AdminGuardService implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authService.user$.pipe(
      first(),
      map((user) => user?.user.role === 'admin' ? true : this.router.createUrlTree(['/auth']))
    );
  }

}
