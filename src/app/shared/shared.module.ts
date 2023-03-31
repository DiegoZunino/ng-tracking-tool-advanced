import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionHeaderComponent} from "./components/section-header/section-header.component";
import {RouterLink} from "@angular/router";
import {SearchFilterPipe} from "./pipes/search-filter.pipe";
import {IsAuthenticatedDirective} from "./directives/is-authenticated.directive";
import {IsLogoutDirective} from "./directives/is-logout.directive";
import {HasRoleDirective} from "./directives/has-role.directive";


@NgModule({
  declarations: [
    SectionHeaderComponent,
    SearchFilterPipe,
    IsAuthenticatedDirective,
    IsLogoutDirective,
    HasRoleDirective
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  // providers: [LoggingService],
  exports: [
    SectionHeaderComponent,
    SearchFilterPipe,
    IsAuthenticatedDirective,
    IsLogoutDirective,
    HasRoleDirective
  ]
})
export class SharedModule { }
