import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) =>
      {
        if(error.status === 401) {
          console.log('Error 401')
        } else if (error.status === 404) {
          console.log('Error 404')
        }
        return throwError(error);
      })
    );
  }
}
