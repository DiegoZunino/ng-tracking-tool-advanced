import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ProjectContainerComponent } from './projects/project-container/project-container.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectSearchComponent } from './projects/project-search/project-search.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { HomeComponent } from './layouts/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectContainerComponent,
    SearchFilterPipe,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectSearchComponent,
    ProjectDetailComponent,
    HomeComponent,
    NavbarComponent,
    SectionHeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }