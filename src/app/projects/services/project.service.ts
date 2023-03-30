import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Project} from '../../models/project';
import {AuthService} from "../../core/auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.baseUrl}/projects`);
  }

  get(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.baseUrl}/projects/${id}`);
  }

  add(project: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.baseUrl}/projects`, project);
  }

  update(project: Project): Observable<Project> {
    return this.http.put<Project>(`${environment.baseUrl}/projects/${project.id}`, project);
  }
}
