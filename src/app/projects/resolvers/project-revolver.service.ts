import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Project} from "../../models/project";
import {catchError, Observable, throwError} from "rxjs";
import {ProjectService} from "../services/project.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectRevolverService implements Resolve<Project>{

  constructor(private projectService: ProjectService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
    return this.projectService.get(+route.paramMap.get('id')!).pipe(
      catchError((error) => {
        this.router.navigateByUrl('/projects')
        return throwError(error);
      })
    )
  }

}
