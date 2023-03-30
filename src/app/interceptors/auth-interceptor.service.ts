import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {exhaustMap, first, Observable} from "rxjs";
import {AuthService} from "../auth/services/auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user$.pipe(
     first(),
     exhaustMap((user) => {
       if(user) {
          const request = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${user.accessToken}`)
          })
         return next.handle(request);
       }
       return  next.handle(req);
     })
    );
  }
}
