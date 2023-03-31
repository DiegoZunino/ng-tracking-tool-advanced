import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth/services/auth.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./interceptors/auth-interceptor.service";
import {AdminGuardService} from "./auth/guards/admin-guard.service";
import {AuthGuardService} from "./auth/guards/auth-guard.service";
import {SelectivePreloadingService} from "./preloading/selective-preloading.service";
import {ErrorInterceptorService} from "./interceptors/error-interceptor.service";
import {LoggingService} from "./logging/logging.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminGuardService,
    SelectivePreloadingService,
    LoggingService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true}
  ]
})
export class CoreModule { }
