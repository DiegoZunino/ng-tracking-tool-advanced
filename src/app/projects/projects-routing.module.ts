import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectContainerComponent} from "./project-container/project-container.component";
import {AuthGuardService} from "../core/auth/guards/auth-guard.service";
import {ProjectsComponent} from "./projects.component";
import {ProjectRevolverService} from "./resolvers/project-revolver.service";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: ':id', component: ProjectDetailComponent, resolve: { project: ProjectRevolverService } },
      { path: '', component: ProjectContainerComponent}
    ]
  }
];

@NgModule(
  {
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  }
)
export class ProjectsRoutingModule {}
