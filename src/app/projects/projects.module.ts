import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectContainerComponent} from "./project-container/project-container.component";
import {ProjectFormComponent} from "./project-form/project-form.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectSearchComponent} from "./project-search/project-search.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ProjectsComponent} from './projects.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectContainerComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectSearchComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProjectsModule { }
