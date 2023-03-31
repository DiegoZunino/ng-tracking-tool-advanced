import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminGuardService} from "../core/auth/guards/admin-guard.service";

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AdminGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
