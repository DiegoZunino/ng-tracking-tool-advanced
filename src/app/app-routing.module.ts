import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./layouts/home/home.component";
import {SelectivePreloadingService} from "./core/preloading/selective-preloading.service";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(x=>x.ProjectsModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(x=>x.AuthModule), data: {preload: true}},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(x=>x.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
