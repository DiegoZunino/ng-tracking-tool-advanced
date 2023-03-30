import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectContainerComponent} from "./project-container/project-container.component";
import {AuthGuardService} from "../core/auth/guards/auth-guard.service";

const routes: Routes = [
  { path: 'detail/:id', component: ProjectDetailComponent },
  { path: '', component: ProjectContainerComponent, canActivate: [AuthGuardService] }
];

@NgModule(
  {
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  }
)
export class ProjectsRoutingModule {}
