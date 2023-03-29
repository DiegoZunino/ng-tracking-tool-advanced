import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { ProjectContainerComponent } from "./projects/project-container/project-container.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  { path: 'projects/detail/:id', component: ProjectDetailComponent },
  { path: 'projects', component: ProjectContainerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
