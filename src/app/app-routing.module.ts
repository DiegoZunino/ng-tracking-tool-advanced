import {NgModule} from "@angular/core";
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./layouts/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(x=>x.ProjectsModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(x=>x.AuthModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(x=>x.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
